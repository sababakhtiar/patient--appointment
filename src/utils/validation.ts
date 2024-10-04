
import { GraphQLError } from "graphql";
import {
  parse,
  addHours,
  isBefore,
  startOfDay,
  format,
  isSameDay,
} from "date-fns";
import {
  AppointmentStatus,
  UserRole,
  Gender,
} from "../../prisma/generated/type-graphql";

export const validateName = (name: string) => {
  const nameRegex = /^(Dr\.|Mr\.|Mrs\.|Ms\.)?\s*[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/;
  if (!name.trim() || !nameRegex.test(name)) {
    throw new GraphQLError(
      "Invalid name: Name must contain only alphabets and may include a valid title like Dr., Mr., Mrs., or Ms."
    );
  }
};

export const validateRole = (role: UserRole) => {
  if (!Object.values(UserRole).includes(role)) {
    throw new GraphQLError(
      "Invalid role provided. Must be either PATIENT or DOCTOR."
    );
  }
};
export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new GraphQLError("Invalid email address.");
  }
};

export const validatePhoneNumber = (phoneNumber: string) => {
  if (!/^\+?[1-9]\d{1,14}$/.test(phoneNumber)) {
    throw new GraphQLError(
      "Invalid phone number: Phone number must be in E.164 format (e.g., +14155552671)."
    );
  }
};

export const validateMobileNumber = (mobileNo: string) => {
  if (!/^\+[1-9]\d{1,14}$/.test(mobileNo)) {
    throw new GraphQLError(
      "Invalid phone number: Phone number must be in E.164 format (e.g., +14155552671)."
    );
  }
};

export const validateGender = (gender: string) => {
  if (!Object.values(Gender).includes(gender as Gender)) {
    throw new GraphQLError(
      `Invalid gender: Gender must be one of ${Object.values(Gender).join(
        ", "
      )}.`
    );
  }
};

export const validateNonEmpty = (field: string, fieldName: string) => {
  if (!field.trim()) {
    throw new GraphQLError(
      `Invalid ${fieldName}: ${fieldName} cannot be empty.`
    );
  }
};

export const validatePassword = (password: string) => {
  if (password.length < 8) {
    throw new GraphQLError("Password must be at least 8 characters long.");
  }
};

export function validateAppointmentDate(appointmentDate: string): Date {
  const parsedAppointmentDate = parse(appointmentDate, "dd MMM yy", new Date());
  const appointmentDateUTC = addHours(
    parsedAppointmentDate,
    -parsedAppointmentDate.getTimezoneOffset() / 60
  );
  const currentDateUTC = new Date();

  if (isBefore(startOfDay(appointmentDateUTC), startOfDay(currentDateUTC))) {
    throw new GraphQLError("Appointment date cannot be in the past.");
  }

  return appointmentDateUTC;
}

export function validateAppointmentTime(
  appointmentTime: string,
  appointmentDate: Date
): void {
  const currentTime = new Date();

  const parsedAppointmentTime = parse(
    appointmentTime,
    "hh:mm a",
    appointmentDate
  );
  const parsedCurrentTime = parse(
    format(currentTime, "hh:mm a"),
    "hh:mm a",
    currentTime
  );

  if (
    isSameDay(appointmentDate, currentTime) &&
    isBefore(parsedAppointmentTime, parsedCurrentTime)
  ) {
    throw new GraphQLError("Appointment time cannot be in the past.");
  }
}

export function validateAppointmentStatus(status: AppointmentStatus) {
  if (status !== AppointmentStatus.UPCOMING) {
    throw new GraphQLError(
      "Invalid appointment status. Status must be 'UPCOMING' when creating a new appointment."
    );
  }
}

export const validateStatus = (status: AppointmentStatus) => {
  const validStatuses = [
    AppointmentStatus.UPCOMING,
    AppointmentStatus.IN_PROGRESS,
    AppointmentStatus.MISSED,
    AppointmentStatus.COMPLETED,
  ];

  if (!validStatuses.includes(status)) {
    throw new GraphQLError(
      `Invalid appointment status. Status must be one of ${validStatuses.join(
        ", "
      )}.`
    );
  }
};

