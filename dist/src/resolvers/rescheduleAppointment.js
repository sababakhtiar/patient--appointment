"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RescheduleResolver = void 0;
const type_graphql_1 = require("type-graphql");
const graphql_1 = require("graphql");
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const isAuth_1 = require("../middleware/isAuth");
const prisma_config_1 = __importDefault(require("../libs/prisma.config"));
const validation_1 = require("../utils/validation");
const mailer_1 = require("../utils/mailer");
const updateAppointment_1 = require("../utils/updateAppointment");
let RescheduleResolver = class RescheduleResolver {
    async rescheduleAppointment(appointmentId, status, context, appointmentTime, appointmentDate) {
        try {
            const user = context.user;
            if (!user) {
                throw new graphql_1.GraphQLError("Invalid or missing token.");
            }
            // Fetch the existing appointment details
            const existingAppointment = await prisma_config_1.default.appointment.findUnique({
                where: { id: appointmentId },
                include: { doctor: true, patient: true },
            });
            if (!existingAppointment) {
                throw new graphql_1.GraphQLError("Appointment does not exist.");
            }
            // Ensure only the patient or doctor can update the appointment
            if ((user.role === "PATIENT" && user.id !== existingAppointment.patient.userId) ||
                (user.role === "DOCTOR" && user.id !== existingAppointment.doctor.userId)) {
                throw new graphql_1.GraphQLError("You don't have permission to update this appointment.");
            }
            // Validate the new status and appointment details
            (0, validation_1.validateStatus)(status);
            let parsedAppointmentDate = existingAppointment.appointmentDate;
            if (appointmentDate) {
                parsedAppointmentDate = (0, validation_1.validateAppointmentDate)(appointmentDate);
            }
            if (appointmentDate) {
                const appointmentDateUTC = (0, validation_1.validateAppointmentDate)(appointmentDate);
                if (appointmentTime) {
                    (0, validation_1.validateAppointmentTime)(appointmentTime, appointmentDateUTC);
                }
            }
            else {
                throw new graphql_1.GraphQLError("Appointment date is required.");
            }
            // Check if the doctor is available at the new date and time
            const conflictingAppointment = await prisma_config_1.default.appointment.findFirst({
                where: {
                    doctorId: existingAppointment.doctorId,
                    appointmentDate: parsedAppointmentDate,
                    appointmentTime: appointmentTime || existingAppointment.appointmentTime,
                    status: { notIn: ["COMPLETED"] },
                },
            });
            if (conflictingAppointment) {
                throw new graphql_1.GraphQLError(`Doctor is not available at ${appointmentTime} on ${appointmentDate}. Please choose a different time.`);
            }
            // Update the appointment in the database
            await prisma_config_1.default.appointment.update({
                where: { id: appointmentId },
                data: {
                    status,
                    appointmentDate: parsedAppointmentDate,
                    appointmentTime: appointmentTime || existingAppointment.appointmentTime,
                },
            });
            const appointmentDetails = (0, updateAppointment_1.getAppointmentRescheduledEmail)(existingAppointment.doctor.name, existingAppointment.patient.name, parsedAppointmentDate, appointmentTime || existingAppointment.appointmentTime, status);
            // Send an email to the doctor if the user is the patient
            if (user.role === "PATIENT") {
                if (existingAppointment.doctor.email) {
                    await (0, mailer_1.sendMail)(existingAppointment.doctor.email, "Appointment Updated", appointmentDetails);
                }
                else {
                    throw new graphql_1.GraphQLError(`Doctor email is missing for appointment ID: ${appointmentId}`);
                }
            }
            // Send an email to the patient if the user is the doctor
            if (user.role === "DOCTOR") {
                if (existingAppointment.patient.email) {
                    await (0, mailer_1.sendMail)(existingAppointment.patient.email, "Appointment Updated", appointmentDetails);
                }
                else {
                    throw new graphql_1.GraphQLError(`Patient email is missing for appointment ID: ${appointmentId}`);
                }
            }
            return "Appointment rescheduled and email sent successfully!";
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError(`Failed to update the appointment:`, {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
};
exports.RescheduleResolver = RescheduleResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("appointmentId")),
    __param(1, (0, type_graphql_1.Arg)("status", () => type_graphql_2.AppointmentStatus, {
        defaultValue: type_graphql_2.AppointmentStatus.UPCOMING,
    })),
    __param(2, (0, type_graphql_1.Ctx)()),
    __param(3, (0, type_graphql_1.Arg)("appointmentTime", { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("appointmentDate", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, String, String]),
    __metadata("design:returntype", Promise)
], RescheduleResolver.prototype, "rescheduleAppointment", null);
exports.RescheduleResolver = RescheduleResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RescheduleResolver);
