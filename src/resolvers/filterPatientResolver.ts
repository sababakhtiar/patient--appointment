import { Resolver, Query, Arg, Ctx, UseMiddleware } from "type-graphql";
import { AppointmentStatus, Gender as PrismaGender } from "@prisma/client";
import { GraphQLError } from "graphql";
import { isAuth } from "../middleware/isAuth";
import { Patient, Gender } from "../../prisma/generated/type-graphql";
import { ContextType, PatientFilter } from "../types/types";
import prisma from "../libs/prisma.config";

@Resolver()
export class FilterResolver {
  @Query(() => [Patient])
  @UseMiddleware(isAuth)
  async getPatientsByDoctor(
    @Ctx() context: ContextType,
    @Arg("gender", () => Gender, { nullable: true }) gender?: PrismaGender,
    @Arg("ageRange", { nullable: true }) ageRange?: string,
    @Arg("status", () => String, { nullable: true }) status?: AppointmentStatus
  ): Promise<Patient[]> {
    try {
      const user = context.user;
      console.log("User context: ", user);
      if (!user) {
        throw new GraphQLError("Invalid or missing token.");
      }

      if (user.role !== "DOCTOR") {
        throw new GraphQLError("Only doctors can access this data.");
      }

      const doctor = await prisma.doctor.findFirst({
        where: {userId:user.id},
      });
      console.log("Doctor from DB: ", doctor);

      if (!doctor) {
        throw new GraphQLError(`Doctor with ID ${user.id} does not exist.`);
      }

      const patientFilters: PatientFilter = {
        doctorId: doctor.id,
      };

      if (gender) {
        patientFilters.gender = gender as Gender;
      }

      if (ageRange) {
        const [minAge, maxAge] = ageRange
          .split("-")
          .map((age) => parseInt(age));
        if (minAge && maxAge) {
          patientFilters.age = {
            gte: minAge,
            lte: maxAge,
          };
        } else if (minAge) {
          patientFilters.age = {
            gte: minAge,
          };
        }
      }

      const patients = await prisma.patient.findMany({
        where: patientFilters,
        include: {
          appointments: {
            where: status ? { status } : {},
          },
        },
      });

      if (!patients.length) {
        throw new GraphQLError("No patients found with the given criteria.");
      }

      const filteredPatients = patients.filter(
        (patient) => patient.appointments.length > 0
      );

      return filteredPatients;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("An error occurred while fetching patients.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }
}
