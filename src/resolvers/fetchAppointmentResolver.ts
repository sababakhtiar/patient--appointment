import { Resolver, Query, Ctx, UseMiddleware } from "type-graphql";
import { Appointment } from "../../prisma/generated/type-graphql";
import { GraphQLError } from "graphql";
import { isAuth } from "../middleware/isAuth";
import { ContextType } from "../types/types";
import prisma from "../libs/prisma.config";

@Resolver()
export class AppointmentfetchResolver {
  @Query(() => [Appointment])
  @UseMiddleware(isAuth)
  async fetchMyAppointments(
    @Ctx() context: ContextType
  ): Promise<Appointment[]> {
    try {
      const user = context.user;

      if (!user) {
        throw new GraphQLError("Invalid or missing token.");
      }

      let appointments: Appointment[];

      if (user.role === "PATIENT") {
        const patient = await prisma.patient.findUnique({
          where: { userId: user.id },
        });

        if (!patient) {
          throw new GraphQLError("Patient profile does not exist.");
        }

        appointments = await prisma.appointment.findMany({
          where: {
            patientId: patient.id,
          },
          include: {
            doctor: true,
          },
        });
      } else if (user.role === "DOCTOR") {
        const doctor = await prisma.doctor.findUnique({
          where: { userId: user.id },
        });

        if (!doctor) {
          throw new GraphQLError("Doctor profile does not exist.");
        }

        appointments = await prisma.appointment.findMany({
          where: {
            doctorId: doctor.id,
          },
          include: {
            patient: true,
          },
        });
      } else {
        throw new GraphQLError(
          "Only doctors or patients can fetch appointments."
        );
      }

      return appointments;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("Failed to fetch appointments.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }
}
