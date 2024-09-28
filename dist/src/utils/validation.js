"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStatus = exports.validatePassword = exports.validateNonEmpty = exports.validateGender = exports.validateMobileNumber = exports.validatePhoneNumber = exports.validateEmail = exports.validateRole = exports.validateName = void 0;
exports.validateAppointmentDate = validateAppointmentDate;
exports.validateAppointmentTime = validateAppointmentTime;
exports.validateAppointmentStatus = validateAppointmentStatus;
const graphql_1 = require("graphql");
const date_fns_1 = require("date-fns");
const type_graphql_1 = require("../../prisma/generated/type-graphql");
const validateName = (name) => {
    const nameRegex = /^(Dr\.|Mr\.|Mrs\.|Ms\.)?\s*[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/;
    if (!name.trim() || !nameRegex.test(name)) {
        throw new graphql_1.GraphQLError("Invalid name: Name must contain only alphabets and may include a valid title like Dr., Mr., Mrs., or Ms.");
    }
};
exports.validateName = validateName;
const validateRole = (role) => {
    if (!Object.values(type_graphql_1.UserRole).includes(role)) {
        throw new graphql_1.GraphQLError("Invalid role provided. Must be either PATIENT or DOCTOR.");
    }
};
exports.validateRole = validateRole;
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new graphql_1.GraphQLError("Invalid email address.");
    }
};
exports.validateEmail = validateEmail;
const validatePhoneNumber = (phoneNumber) => {
    if (!/^\+?[1-9]\d{1,14}$/.test(phoneNumber)) {
        throw new graphql_1.GraphQLError("Invalid phone number: Phone number must be in E.164 format (e.g., +14155552671).");
    }
};
exports.validatePhoneNumber = validatePhoneNumber;
const validateMobileNumber = (mobileNo) => {
    if (!/^\+[1-9]\d{1,14}$/.test(mobileNo)) {
        throw new graphql_1.GraphQLError("Invalid phone number: Phone number must be in E.164 format (e.g., +14155552671).");
    }
};
exports.validateMobileNumber = validateMobileNumber;
const validateGender = (gender) => {
    if (!Object.values(type_graphql_1.Gender).includes(gender)) {
        throw new graphql_1.GraphQLError(`Invalid gender: Gender must be one of ${Object.values(type_graphql_1.Gender).join(", ")}.`);
    }
};
exports.validateGender = validateGender;
const validateNonEmpty = (field, fieldName) => {
    if (!field.trim()) {
        throw new graphql_1.GraphQLError(`Invalid ${fieldName}: ${fieldName} cannot be empty.`);
    }
};
exports.validateNonEmpty = validateNonEmpty;
const validatePassword = (password) => {
    if (password.length < 8) {
        throw new graphql_1.GraphQLError("Password must be at least 8 characters long.");
    }
};
exports.validatePassword = validatePassword;
function validateAppointmentDate(appointmentDate) {
    const parsedAppointmentDate = (0, date_fns_1.parse)(appointmentDate, "dd MMM yy", new Date());
    const appointmentDateUTC = (0, date_fns_1.addHours)(parsedAppointmentDate, -parsedAppointmentDate.getTimezoneOffset() / 60);
    const currentDateUTC = new Date();
    if ((0, date_fns_1.isBefore)((0, date_fns_1.startOfDay)(appointmentDateUTC), (0, date_fns_1.startOfDay)(currentDateUTC))) {
        throw new graphql_1.GraphQLError("Appointment date cannot be in the past.");
    }
    return appointmentDateUTC;
}
function validateAppointmentTime(appointmentTime, appointmentDate) {
    const currentTime = new Date();
    const parsedAppointmentTime = (0, date_fns_1.parse)(appointmentTime, "hh:mm a", appointmentDate);
    const parsedCurrentTime = (0, date_fns_1.parse)((0, date_fns_1.format)(currentTime, "hh:mm a"), "hh:mm a", currentTime);
    if ((0, date_fns_1.isSameDay)(appointmentDate, currentTime) &&
        (0, date_fns_1.isBefore)(parsedAppointmentTime, parsedCurrentTime)) {
        throw new graphql_1.GraphQLError("Appointment time cannot be in the past.");
    }
}
function validateAppointmentStatus(status) {
    if (status !== type_graphql_1.AppointmentStatus.UPCOMING) {
        throw new graphql_1.GraphQLError("Invalid appointment status. Status must be 'UPCOMING' when creating a new appointment.");
    }
}
const validateStatus = (status) => {
    const validStatuses = [
        type_graphql_1.AppointmentStatus.UPCOMING,
        type_graphql_1.AppointmentStatus.IN_PROGRESS,
        type_graphql_1.AppointmentStatus.MISSED,
        type_graphql_1.AppointmentStatus.COMPLETED,
    ];
    if (!validStatuses.includes(status)) {
        throw new graphql_1.GraphQLError(`Invalid appointment status. Status must be one of ${validStatuses.join(", ")}.`);
    }
};
exports.validateStatus = validateStatus;
