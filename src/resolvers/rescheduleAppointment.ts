import { Arg, Mutation, Resolver, UseMiddleware, Ctx } from "type-graphql";
import { GraphQLError } from "graphql";
import { AppointmentStatus } from "../../prisma/generated/type-graphql";
import { isAuth } from "../middleware/isAuth";
import { ContextType } from "../types/types";
import prisma from "../libs/prisma.config";
import {
  validateStatus,
  validateAppointmentDate,
  validateAppointmentTime,
 
} from "../utils/validation"; 
import { sendMail } from "../utils/mailer";
import { getAppointmentRescheduledEmail } from "../utils/updateAppointment";
@Resolver()
export class RescheduleResolver {

  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async rescheduleAppointment(
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

      // Fetch the existing appointment details
      const existingAppointment = await prisma.appointment.findUnique({
        where: { id: appointmentId },
        include: { doctor: true, patient: true },
      });

      if (!existingAppointment) {
        throw new GraphQLError("Appointment does not exist.");
      }

      // Ensure only the patient or doctor can update the appointment
      if (
        (user.role === "PATIENT" && user.id !== existingAppointment.patient.userId) ||
        (user.role === "DOCTOR" && user.id !== existingAppointment.doctor.userId)
      ) {
        throw new GraphQLError("You don't have permission to update this appointment.");
      }

      // Validate the new status and appointment details
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

      // Check if the doctor is available at the new date and time
      const conflictingAppointment = await prisma.appointment.findFirst({
        where: {
          doctorId: existingAppointment.doctorId,
          appointmentDate: parsedAppointmentDate,
          appointmentTime: appointmentTime || existingAppointment.appointmentTime,
          status: { notIn: [ "COMPLETED"] },
        },
      });

      if (conflictingAppointment) {
        throw new GraphQLError(
          `Doctor is not available at ${appointmentTime} on ${appointmentDate}. Please choose a different time.`
        );
      }

      // Update the appointment in the database
      await prisma.appointment.update({
        where: { id: appointmentId },
        data: {
          status,
          appointmentDate: parsedAppointmentDate,
          appointmentTime: appointmentTime || existingAppointment.appointmentTime,
        },
      });

      const appointmentDetails = getAppointmentRescheduledEmail(
        existingAppointment.doctor.name,
        existingAppointment.patient.name,
        parsedAppointmentDate,
        appointmentTime || existingAppointment.appointmentTime,
        status
      );

      // Send an email to the doctor if the user is the patient
      if (user.role === "PATIENT") {
        if (existingAppointment.doctor.email) {
          await sendMail(
            existingAppointment.doctor.email,
            "Appointment Updated",
            appointmentDetails
          );
        } else {
          throw new GraphQLError(`Doctor email is missing for appointment ID: ${appointmentId}`);
       
        }
      }

      // Send an email to the patient if the user is the doctor
      if (user.role === "DOCTOR") {
        if (existingAppointment.patient.email) {
          await sendMail(
            existingAppointment.patient.email,
            "Appointment Updated",
            appointmentDetails
          );
        } else {
          throw new GraphQLError(`Patient email is missing for appointment ID: ${appointmentId}`);
        }
      }

      return "Appointment rescheduled and email sent successfully!";
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError(`Failed to update the appointment:`, {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }

  
  
}

