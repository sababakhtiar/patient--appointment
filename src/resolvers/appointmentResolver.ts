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
      const { user } = context;

      if (!user || user.role !== "PATIENT") {
        throw new GraphQLError("Invalid or unauthorized request.");
      }

      const [patient, doctor] = await Promise.all([
        prisma.patient.findUnique({ where: { userId: user.id } }),
        prisma.doctor.findFirst({
          where: { OR: [{ name: doctorIdentifier }, { email: doctorIdentifier }] },
        }),
      ]);

      if (!patient || !doctor) {
        throw new GraphQLError("Patient or doctor does not exist.");
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
              appointmentTime,
            },
          },
        },
      });

      if (!slot) {
        throw new GraphQLError(
          `Doctor is not available at ${appointmentTime} on ${appointmentDate}.`
        );
      }

      await Promise.all([
        prisma.appointment.create({
          data: {
            id: uuidv4(),
            doctorId: doctor.id,
            patientId: patient.id,
            appointmentDate: formatISO(appointmentDateUTC),
            appointmentTime,
            slotId: slot.id,
            status,
          },
        }),
        prisma.slot.update({
          where: { id: slot.id },
          data: { isBooked: true },
        }),
      ]);

      return `Appointment created successfully with Dr. ${doctor.name} at ${appointmentTime} on ${appointmentDate}.`;
    } catch (error) {
      throw new GraphQLError("Failed to create appointment.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }






  // @Mutation(() => String)
  // @UseMiddleware(isAuth)
  // async updateAppointment(
  //   @Arg("appointmentId") appointmentId: string,
  //   @Arg("status", () => AppointmentStatus, {
  //     defaultValue: AppointmentStatus.UPCOMING,
  //   })
  //   status: AppointmentStatus,
  //   @Ctx() context: ContextType,
  //   @Arg("appointmentTime", { nullable: true }) appointmentTime?: string,
  //   @Arg("appointmentDate", { nullable: true }) appointmentDate?: string
  // ): Promise<string> {
  //   try {
  //     const { user } = context;
  //     const existingAppointment = await prisma.appointment.findUnique({
  //       where: { id: appointmentId },
  //       include: { doctor: true, patient: true },
  //     });

  //     if (!existingAppointment || (user.role !== "PATIENT" && user.id !== existingAppointment.doctor.userId)) {
  //       throw new GraphQLError("Invalid or unauthorized request.");
  //     }

  //     validateStatus(status);
  //     const parsedAppointmentDate = appointmentDate
  //       ? validateAppointmentDate(appointmentDate)
  //       : existingAppointment.appointmentDate;

  //     await prisma.appointment.update({
  //       where: { id: appointmentId },
  //       data: {
  //         status,
  //         appointmentDate: parsedAppointmentDate,
  //         appointmentTime: appointmentTime || existingAppointment.appointmentTime,
  //       },
  //     });

  //     return `Appointment updated successfully.`;
  //   } catch (error) {
  //     throw new GraphQLError("Failed to update appointment.", {
  //       extensions: { code: "INTERNAL_SERVER_ERROR" },
  //     });
  //   }
  // }







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
    const { user } = context;

    const existingAppointment = await prisma.appointment.findUnique({
      where: { id: appointmentId },
      include: { doctor: true, patient: true },
    });

    if (!existingAppointment || (user.role !== "PATIENT" && user.id !== existingAppointment.doctor.userId)) {
      throw new GraphQLError("Invalid or unauthorized request.");
    }

    validateStatus(status);
    const parsedAppointmentDate = appointmentDate
      ? validateAppointmentDate(appointmentDate)
      : existingAppointment.appointmentDate;

    await prisma.appointment.update({
      where: { id: appointmentId },
      data: {
        status,
        appointmentDate: parsedAppointmentDate,
        appointmentTime: appointmentTime || existingAppointment.appointmentTime,
      },
    });

    // Send appointment update email
    const role = user.role;
    const doctorName = existingAppointment.doctor.name;
    const patientName = existingAppointment.patient.name;
    const recipientEmail = role === "PATIENT" ? existingAppointment.doctor.email : existingAppointment.patient.email;

    await sendAppointmentUpdateEmail(recipientEmail, doctorName, patientName, parsedAppointmentDate, role);

    return `Appointment updated successfully. An email notification has been sent.`;

  } catch (error) {
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
      const { user } = context;
      const appointment = await prisma.appointment.findUnique({
        where: { id: appointmentId },
        include: { doctor: true, patient: true },
      });

      if (!appointment || (user.role !== "PATIENT" && user.id !== appointment.doctor.userId)) {
        throw new GraphQLError("Invalid or unauthorized request.");
      }

      await prisma.appointment.delete({ where: { id: appointmentId } });

      return `Appointment deleted successfully.`;
    } catch (error) {
      throw new GraphQLError("Failed to delete appointment.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }
}
// Cron job optimization
cron.schedule("* * * * *", async () => {
  try {
    const currentDate = new Date();
    const appointments = await prisma.appointment.findMany({
      where: { status: { in: [AppointmentStatus.UPCOMING, AppointmentStatus.IN_PROGRESS] } },
      select: { id: true, appointmentDate: true, appointmentTime: true, status: true, slotId: true },
    });

    const updateTasks = appointments.map(async (appointment) => {
      const appointmentDateTime = new Date(`${appointment.appointmentDate.toISOString().split("T")[0]} ${appointment.appointmentTime}`);
      const oneHourAfterAppointment = new Date(appointmentDateTime.getTime() + 60 * 60 * 1000);

      if (appointment.status === AppointmentStatus.UPCOMING) {
        if (currentDate >= appointmentDateTime && currentDate < oneHourAfterAppointment) {
          return prisma.appointment.update({ where: { id: appointment.id }, data: { status: AppointmentStatus.IN_PROGRESS } });
        } else if (currentDate >= oneHourAfterAppointment) {
          return prisma.appointment.update({ where: { id: appointment.id }, data: { status: AppointmentStatus.MISSED } });
        }
      } else if (appointment.status === AppointmentStatus.IN_PROGRESS && currentDate >= oneHourAfterAppointment) {
        return prisma.appointment.update({ where: { id: appointment.id }, data: { status: AppointmentStatus.MISSED } });
      }
    });
    await Promise.all(updateTasks);
  } catch (error) {
    console.error("Error in cron job:", error);
  } finally {
    await prisma.$disconnect();
  }
});
function sendAppointmentUpdateEmail(recipientEmail: string | null, doctorName: string, patientName: string, parsedAppointmentDate: Date, role: string) {
  throw new Error("Function not implemented.");
}

