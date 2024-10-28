import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import { GraphQLError } from "graphql";
// import cron from "node-cron";
import { AppointmentStatus } from "../../prisma/generated/type-graphql";
import {
  validateAppointmentDate,
  validateAppointmentTime,
  validateAppointmentStatus,
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

      // Check for conflicting appointments at the same date and time
      const conflictingAppointment = await prisma.appointment.findFirst({
        where: {
          doctorId: doctor.id,
          appointmentDate: formatISO(appointmentDateUTC),
          appointmentTime: appointmentTime,
        },
      });

      if (conflictingAppointment) {
        throw new GraphQLError(
          `Doctor is not available at ${appointmentTime} on ${appointmentDate}.`
        );
      }

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
        throw new GraphQLError("Slot is not available.");
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

      return `Appointment created successfully for patient ${patient.name} with Doctor ${doctor.name} at ${appointmentTime} on ${appointmentDate}.`;
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
}

// cron.schedule("* * * * *", async () => {
//   const currentDate = new Date();
//   const appointments = await prisma.appointment.findMany({
//     where: {
//       status: {
//         in: [AppointmentStatus.UPCOMING, AppointmentStatus.IN_PROGRESS],
//       },
//     },
//     include: { slot: true },
//   });
//   appointments.forEach(async (appointment) => {
//     const appointmentDateTime = new Date(
//       `${appointment.appointmentDate.toISOString().split("T")[0]} ${
//         appointment.appointmentTime
//       }`
//     );
//     const oneHourAfterAppointment = new Date(
//       appointmentDateTime.getTime() + 60 * 60 * 1000
//     );
//     if (appointment.status === AppointmentStatus.UPCOMING) {
//       if (
//         currentDate >= appointmentDateTime &&
//         currentDate < oneHourAfterAppointment
//       ) {
//         await prisma.appointment.update({
//           where: { id: appointment.id },
//           data: { status: AppointmentStatus.IN_PROGRESS },
//         });
//       } else if (currentDate >= oneHourAfterAppointment) {
//         await prisma.appointment.update({
//           where: { id: appointment.id },
//           data: { status: AppointmentStatus.MISSED },
//         });
//         if (appointment.slotId) {
//           await prisma.slot.update({
//             where: { id: appointment.slotId },
//             data: { isBooked: false },
//           });
//         } else {
//           console.error(
//             "Appointment slotId is null, unable to update slot booking status."
//           );
//         }
//       }
//     } else if (appointment.status === AppointmentStatus.IN_PROGRESS) {
//       if (currentDate >= oneHourAfterAppointment) {
//         await prisma.appointment.update({
//           where: { id: appointment.id },
//           data: { status: AppointmentStatus.MISSED },
//         });
//         if (appointment.slotId) {
//           await prisma.slot.update({
//             where: { id: appointment.slotId },
//             data: { isBooked: false },
//           });
//         }
//       }
//     }
//   });
// });



