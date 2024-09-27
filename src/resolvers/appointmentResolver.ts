import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import { GraphQLError } from "graphql";
import cron from "node-cron";
import { AppointmentStatus } from "../../prisma/generated/type-graphql";
import {
  validateAppointmentDate,
  validateAppointmentTime,
  validateAppointmentStatus,
  validateStatus,
} from "../utils/validation";
import { formatISO } from "date-fns";
import { isAuth } from "../middleware/isAuth";
import { ContextType } from "../types/types";
import prisma from "../libs/prisma.config";

@Resolver()
export class AppointmentResolver {
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async createAppointment(
    @Arg("doctorIdentifier") doctorIdentifier: string,
    @Arg("appointmentTime") appointmentTime: string,
    @Arg("appointmentDate") appointmentDate: string,
    @Arg("status", () => AppointmentStatus, {
      defaultValue: AppointmentStatus.UPCOMING,
    })
    status: AppointmentStatus,
    @Ctx() context: ContextType
  ): Promise<string> {
    try {
      const user = context.user;

      if (!user) {
        throw new GraphQLError("Invalid or missing token.");
      }

      if (user.role !== "PATIENT") {
        throw new GraphQLError("Only patients can create appointments.");
      }

      const patient = await prisma.patient.findUnique({
        where: { userId: user.id },
      });

      if (!patient) {
        throw new GraphQLError("Patient profile does not exist.");
      }

      const doctor = await prisma.doctor.findFirst({
        where: {
          OR: [{ name: doctorIdentifier }, { email: doctorIdentifier }],
        },
      });

      if (!doctor) {
        throw new GraphQLError(`Doctor does not exist.`);
      }

      validateAppointmentStatus(status);

      const appointmentDateUTC = validateAppointmentDate(appointmentDate);

      validateAppointmentTime(appointmentTime, appointmentDateUTC);
      const slot = await prisma.slot.findFirst({
        where: {
          doctorId: doctor.id,
          time: appointmentTime,

          appointments: {
            none: {
              appointmentDate: formatISO(appointmentDateUTC),
              appointmentTime: appointmentTime,
            },
          },
        },
      });

      if (!slot) {
        throw new GraphQLError(
          `Doctor is not available at ${appointmentTime} on ${appointmentDate}.`
        );
      }

      await prisma.appointment.create({
        data: {
          id: uuidv4(),
          doctorId: doctor.id,
          patientId: patient.id,
          appointmentDate: formatISO(appointmentDateUTC),
          appointmentTime,
          slotId: slot.id,
          status,
        },
      });

      await prisma.slot.update({
        where: { id: slot.id },
        data: { isBooked: true },
      });

      return `Appointment created successfully for patient ${patient.name} with Doctor ${doctor.name} at ${appointmentTime} on ${appointmentDate}..`;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("Failed to create appointment.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }

  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async updateAppointment(
    @Arg("appointmentId") appointmentId: string,
    @Arg("status", () => AppointmentStatus, {
      defaultValue: AppointmentStatus.UPCOMING,
    })
    status: AppointmentStatus,
    @Ctx() context: ContextType,
    @Arg("appointmentTime", { nullable: true }) appointmentTime?: string,
    @Arg("appointmentDate", { nullable: true }) appointmentDate?: string
  ): Promise<string> {
    try {
      const user = context.user;
      if (!user) {
        throw new GraphQLError("Invalid or missing token.");
      }

      const existingAppointment = await prisma.appointment.findUnique({
        where: { id: appointmentId },
        include: { doctor: true, patient: true },
      });

      if (!existingAppointment) {
        throw new GraphQLError("Appointment does not exist.");
      }

      if (
        user.role !== "PATIENT" &&
        user.id !== existingAppointment.doctor.userId
      ) {
        throw new GraphQLError(
          "Only the patient or doctor associated with the appointment can update it."
        );
      }

      validateStatus(status);

      let parsedAppointmentDate = existingAppointment.appointmentDate;
      if (appointmentDate) {
        parsedAppointmentDate = validateAppointmentDate(appointmentDate);
      }

      if (appointmentDate) {
        const appointmentDateUTC = validateAppointmentDate(appointmentDate);

        if (appointmentTime) {
          validateAppointmentTime(appointmentTime, appointmentDateUTC);
        }
      } else {
        throw new GraphQLError("Appointment date is required.");
      }

      await prisma.appointment.update({
        where: { id: appointmentId },
        data: {
          status,
          appointmentDate: parsedAppointmentDate,
          appointmentTime:
            appointmentTime || existingAppointment.appointmentTime,
        },
      });

      return `Appointment with Dr. ${existingAppointment.doctor.name} for patient ${existingAppointment.patient.name} has been updated.`;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("Failed to update appointment.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }

  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async deleteAppointment(
    @Arg("appointmentId") appointmentId: string,
    @Ctx() context: ContextType
  ): Promise<string> {
    try {
      const user = context.user;
      if (!user) {
        throw new GraphQLError("Invalid or missing token.");
      }

      const appointment = await prisma.appointment.findUnique({
        where: { id: appointmentId },
        include: { doctor: true, patient: true },
      });

      if (!appointment) {
        throw new GraphQLError("Appointment does not exist.");
      }

      if (user.role !== "PATIENT" && user.id !== appointment.doctor.userId) {
        throw new GraphQLError(
          "Only the patient or doctor associated with the appointment can delete it."
        );
      }

      await prisma.appointment.delete({
        where: { id: appointmentId },
      });

      return `Appointment with Dr. ${appointment.doctor.name} for patient ${appointment.patient.name} has been deleted.`;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("Failed to delete appointment.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }
}cron.schedule("* * * * *", async () => {
  try {
    const currentDate = new Date();
    const appointments = await prisma.appointment.findMany({
      where: {
        status: {
          in: [AppointmentStatus.UPCOMING, AppointmentStatus.IN_PROGRESS],
        },
      },
      include: { slot: true },
    });

    // Process each appointment individually with error handling
    appointments.forEach(async (appointment) => {
      try {
        const appointmentDateTime = new Date(
          `${appointment.appointmentDate.toISOString().split("T")[0]} ${
            appointment.appointmentTime
          }`
        );
        const oneHourAfterAppointment = new Date(
          appointmentDateTime.getTime() + 60 * 60 * 1000
        );

        if (appointment.status === AppointmentStatus.UPCOMING) {
          // Update status to IN_PROGRESS if within the appointment time range
          if (
            currentDate >= appointmentDateTime &&
            currentDate < oneHourAfterAppointment
          ) {
            await prisma.appointment.update({
              where: { id: appointment.id },
              data: { status: AppointmentStatus.IN_PROGRESS },
            });
          }
          // Update status to MISSED if the appointment has passed
          else if (currentDate >= oneHourAfterAppointment) {
            await prisma.appointment.update({
              where: { id: appointment.id },
              data: { status: AppointmentStatus.MISSED },
            });

            // Update the slot booking status if the appointment is missed
            if (appointment.slotId) {
              await prisma.slot.update({
                where: { id: appointment.slotId },
                data: { isBooked: false },
              });
            } else {
              console.error(
                `Appointment ${appointment.id}: slotId is null, unable to update slot booking status.`
              );
            }
          }
        } else if (appointment.status === AppointmentStatus.IN_PROGRESS) {
          // Mark the appointment as MISSED if the time has passed
          if (currentDate >= oneHourAfterAppointment) {
            await prisma.appointment.update({
              where: { id: appointment.id },
              data: { status: AppointmentStatus.MISSED },
            });

            if (appointment.slotId) {
              await prisma.slot.update({
                where: { id: appointment.slotId },
                data: { isBooked: false },
              });
            }
          }
        }
      } catch (err) {
        // Handle errors specific to this appointment
        console.error(`Error processing appointment ${appointment.id}:`, err);
      }
    });
  } catch (err) {
    // Global error handler for the entire cron job
    console.error("Error in cron job for updating appointments:", err);
  }
});
