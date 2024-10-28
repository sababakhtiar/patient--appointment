import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import { GraphQLError } from "graphql";
import { uploadToCloudinary } from "../utils/cloudinary";
import {
  validateName,
  validateEmail,
  validateGender,
} from "../utils/validation";
import { isAuth } from "../middleware/isAuth";
import { Gender } from "../../prisma/generated/type-graphql";
import { ContextType } from "../types/types";
import prisma from "../libs/prisma.config";

@Resolver()
export class DoctorResolver {
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async addDoctor(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("profilePhoto") profilePhoto: string,
    @Arg("gender") gender: string,
    @Arg("slotTimes", () => [String]) slotTimes: string[],
    @Ctx() context: ContextType
  ): Promise<string> {
    try {
      const user = context.user;
      if (user.role !== "DOCTOR") {
        throw new GraphQLError("Only doctors can create a doctor profile.");
      }

      validateName(name);
      validateEmail(email);
      validateGender(gender);

      // const uploadedProfilePhoto = await uploadToCloudinary(profilePhoto);

      const existingDoctor = await prisma.doctor.findUnique({
        where: { userId: user.id },
      });

      if (existingDoctor) {
        throw new GraphQLError("Doctor profile already exists.");
      }

      const doctor = await prisma.doctor.create({
        data: {
          id: uuidv4(),
          userId: user.id,
          name,
          email,
          profilePhoto,
          // profilePhoto: uploadedProfilePhoto,
          gender: gender as Gender,
        },
      });

      const slotPromises = slotTimes.map(async (time) => {
        return await prisma.slot.create({
          data: {
            id: uuidv4(),
            doctorId: doctor.id,
            time,
            isBooked: false,
          },
        });
      });

      await Promise.all(slotPromises);

      return `Doctor profile created successfully with available slots.`;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("Failed to add doctor.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }

  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async updateDoctorProfile(
    @Ctx() context: ContextType,
    @Arg("name", { nullable: true }) name?: string,
    @Arg("email", { nullable: true }) email?: string,
    @Arg("profilePhoto", { nullable: true }) profilePhoto?: string,
    @Arg("gender", { nullable: true }) gender?: string,
    @Arg("slotTimes", () => [String], { nullable: true }) slotTimes?: string[]
  ): Promise<string> {
    try {
      const user = context.user;

      if (user.role !== "DOCTOR") {
        throw new GraphQLError("Only doctors can update their profile.");
      }

      if (name) validateName(name);
      if (email) validateEmail(email);
      if (gender) validateGender(gender);

      const doctor = await prisma.doctor.findUnique({
        where: { userId: user.id },
      });

      if (!doctor) {
        throw new GraphQLError("Doctor profile not found.");
      }

      let uploadedProfilePhoto = doctor.profilePhoto;
      if (profilePhoto) {
        uploadedProfilePhoto = await uploadToCloudinary(profilePhoto);
      }

      await prisma.doctor.update({
        where: { userId: user.id },
        data: {
          name: name || doctor.name,
          email: email || doctor.email,
          profilePhoto: uploadedProfilePhoto,
          gender: gender ? (gender as Gender) : doctor.gender,
        },
      });

      if (slotTimes && slotTimes.length > 0) {
        await prisma.slot.deleteMany({
          where: { doctorId: doctor.id },
        });

        const slotPromises = slotTimes.map(async (time) => {
          return await prisma.slot.create({
            data: {
              id: uuidv4(),
              doctorId: doctor.id,
              time,
              isBooked: false,
            },
          });
        });

        await Promise.all(slotPromises);
      }

      return "Doctor profile and available slots updated successfully.";
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError("Failed to update doctor profile.", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }
}
