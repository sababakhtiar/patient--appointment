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
exports.AppointmentResolver = void 0;
const type_graphql_1 = require("type-graphql");
const uuid_1 = require("uuid");
const graphql_1 = require("graphql");
// import cron from "node-cron";
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const validation_1 = require("../utils/validation");
const date_fns_1 = require("date-fns");
const isAuth_1 = require("../middleware/isAuth");
const prisma_config_1 = __importDefault(require("../libs/prisma.config"));
let AppointmentResolver = class AppointmentResolver {
    async createAppointment(doctorIdentifier, appointmentTime, appointmentDate, status, context) {
        try {
            const user = context.user;
            if (!user) {
                throw new graphql_1.GraphQLError("Invalid or missing token.");
            }
            if (user.role !== "PATIENT") {
                throw new graphql_1.GraphQLError("Only patients can create appointments.");
            }
            const patient = await prisma_config_1.default.patient.findUnique({
                where: { userId: user.id },
            });
            if (!patient) {
                throw new graphql_1.GraphQLError("Patient profile does not exist.");
            }
            const doctor = await prisma_config_1.default.doctor.findFirst({
                where: {
                    OR: [{ name: doctorIdentifier }, { email: doctorIdentifier }],
                },
            });
            if (!doctor) {
                throw new graphql_1.GraphQLError(`Doctor does not exist.`);
            }
            (0, validation_1.validateAppointmentStatus)(status);
            const appointmentDateUTC = (0, validation_1.validateAppointmentDate)(appointmentDate);
            (0, validation_1.validateAppointmentTime)(appointmentTime, appointmentDateUTC);
            // Check for conflicting appointments at the same date and time
            const conflictingAppointment = await prisma_config_1.default.appointment.findFirst({
                where: {
                    doctorId: doctor.id,
                    appointmentDate: (0, date_fns_1.formatISO)(appointmentDateUTC),
                    appointmentTime: appointmentTime,
                },
            });
            if (conflictingAppointment) {
                throw new graphql_1.GraphQLError(`Doctor is not available at ${appointmentTime} on ${appointmentDate}.`);
            }
            const slot = await prisma_config_1.default.slot.findFirst({
                where: {
                    doctorId: doctor.id,
                    time: appointmentTime,
                    appointments: {
                        none: {
                            appointmentDate: (0, date_fns_1.formatISO)(appointmentDateUTC),
                            appointmentTime: appointmentTime,
                        },
                    },
                },
            });
            if (!slot) {
                throw new graphql_1.GraphQLError("Slot is not available.");
            }
            await prisma_config_1.default.appointment.create({
                data: {
                    id: (0, uuid_1.v4)(),
                    doctorId: doctor.id,
                    patientId: patient.id,
                    appointmentDate: (0, date_fns_1.formatISO)(appointmentDateUTC),
                    appointmentTime,
                    slotId: slot.id,
                    status,
                },
            });
            await prisma_config_1.default.slot.update({
                where: { id: slot.id },
                data: { isBooked: true },
            });
            return `Appointment created successfully for patient ${patient.name} with Doctor ${doctor.name} at ${appointmentTime} on ${appointmentDate}.`;
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to create appointment.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
    async deleteAppointment(appointmentId, context) {
        try {
            const user = context.user;
            if (!user) {
                throw new graphql_1.GraphQLError("Invalid or missing token.");
            }
            const appointment = await prisma_config_1.default.appointment.findUnique({
                where: { id: appointmentId },
                include: { doctor: true, patient: true },
            });
            if (!appointment) {
                throw new graphql_1.GraphQLError("Appointment does not exist.");
            }
            if (user.role !== "PATIENT" && user.id !== appointment.doctor.userId) {
                throw new graphql_1.GraphQLError("Only the patient or doctor associated with the appointment can delete it.");
            }
            await prisma_config_1.default.appointment.delete({
                where: { id: appointmentId },
            });
            return `Appointment with Dr. ${appointment.doctor.name} for patient ${appointment.patient.name} has been deleted.`;
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to delete appointment.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
};
exports.AppointmentResolver = AppointmentResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("doctorIdentifier")),
    __param(1, (0, type_graphql_1.Arg)("appointmentTime")),
    __param(2, (0, type_graphql_1.Arg)("appointmentDate")),
    __param(3, (0, type_graphql_1.Arg)("status", () => type_graphql_2.AppointmentStatus, {
        defaultValue: type_graphql_2.AppointmentStatus.UPCOMING,
    })),
    __param(4, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "createAppointment", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("appointmentId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "deleteAppointment", null);
exports.AppointmentResolver = AppointmentResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AppointmentResolver);
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
