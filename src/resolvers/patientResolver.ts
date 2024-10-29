import {
  Resolver,
  Mutation,
  Arg,
  Ctx,
  Query,
  UseMiddleware,
} from "type-graphql";

import { v4 as uuidv4 } from "uuid";
import { GraphQLError } from "graphql";

// import { uploadToCloudinary } from "../utils/cloudinary";
import {
  validateName,
  validateEmail,
  validatePhoneNumber,
  validateGender,
  validateNonEmpty,
} from "../utils/validation";
import { Doctor, Gender } from "../../prisma/generated/type-graphql";
import { isAuth } from "../middleware/isAuth";
import { ContextType } from "../types/types";
import prisma from "../libs/prisma.config";
@Resolver()
export class PatientResolver {

  
  @Query(() => [Doctor])
  @UseMiddleware(isAuth)
  async getAllDoctors(@Ctx() context: ContextType): Promise<Doctor[]> {
    try {
      const user = context.user;
      if (user.role !== "PATIENT") {
        throw new GraphQLError("Only patients can view doctor lists.");
      }

      return await prisma.doctor.findMany({
        include: {
          slots: true, // This will include all associated slots for each doctor
        },
      });
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("Failed to fetch doctors.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }


  
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async addPatient(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("phoneNumber") phoneNumber: string,
    @Arg("address") address: string,
    @Arg("age") age: number,
    @Arg("gender") gender: string,
    @Arg("medicalRecord") medicalRecord: string,
    @Arg("prescriptions", () => [String]) prescriptions: string[],
    @Arg("photo") photo: string,
    @Arg("doctorId", { nullable: true }) doctorId: string,
    @Ctx() context: ContextType
  ): Promise<string> {
    try {
      const user = context.user;
      if (user.role !== "PATIENT") {
        throw new GraphQLError("Only patients can add their own information.");
      }

      validateName(name);
      validateEmail(email);
      validatePhoneNumber(phoneNumber);
      validateNonEmpty(address, "address");
      validateNonEmpty(medicalRecord, "medical record");
      validateGender(gender);

      // const uploadedProfilePhoto = await uploadToCloudinary(photo);
      // const uploadedPrescriptionPhotos: string[] = [];
      // for (const prescription of prescriptions) {
      //   const uploadedPrescription = await uploadToCloudinary(prescription);
      //   uploadedPrescriptionPhotos.push(uploadedPrescription);
      // }

      const selectedDoctor = await prisma.doctor.findUnique({
        where: { id: doctorId },
      });

      if (!selectedDoctor) {
        throw new GraphQLError("Selected doctor does not exist.");
      }

      const existingPatient = await prisma.patient.findUnique({
        where: { userId: user.id },
      });

      if (existingPatient) {
        throw new GraphQLError("Patient already exists.");
      }

      const patient = await prisma.patient.create({
        data: {
          id: uuidv4(),
          name,
          email,
          phoneNumber,
          address,
          age,
          gender: gender as Gender,
          medicalRecord,
          prescriptions,
          photo,
          // prescriptions: uploadedPrescriptionPhotos,
          // photo: uploadedProfilePhoto,
          doctorId: selectedDoctor.id,
          userId: user.id,
        },
      });

      return `Patient ${patient.name} added successfully under Doctor ${
        selectedDoctor?.name || "none"
      }.`;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("Failed to add patient.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }
}
