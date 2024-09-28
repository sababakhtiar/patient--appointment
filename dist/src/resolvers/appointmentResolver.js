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
const node_cron_1 = __importDefault(require("node-cron"));
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const validation_1 = require("../utils/validation");
const date_fns_1 = require("date-fns");
const isAuth_1 = require("../middleware/isAuth");
const prisma_config_1 = __importDefault(require("../libs/prisma.config"));
let AppointmentResolver = class AppointmentResolver {
    async createAppointment(doctorIdentifier, appointmentTime, appointmentDate, status, context) {
        try {
            const { user } = context;
            if (!user || user.role !== "PATIENT") {
                throw new graphql_1.GraphQLError("Invalid or unauthorized request.");
            }
            const [patient, doctor] = await Promise.all([
                prisma_config_1.default.patient.findUnique({ where: { userId: user.id } }),
                prisma_config_1.default.doctor.findFirst({
                    where: { OR: [{ name: doctorIdentifier }, { email: doctorIdentifier }] },
                }),
            ]);
            if (!patient || !doctor) {
                throw new graphql_1.GraphQLError("Patient or doctor does not exist.");
            }
            (0, validation_1.validateAppointmentStatus)(status);
            const appointmentDateUTC = (0, validation_1.validateAppointmentDate)(appointmentDate);
            (0, validation_1.validateAppointmentTime)(appointmentTime, appointmentDateUTC);
            const slot = await prisma_config_1.default.slot.findFirst({
                where: {
                    doctorId: doctor.id,
                    time: appointmentTime,
                    appointments: {
                        none: {
                            appointmentDate: (0, date_fns_1.formatISO)(appointmentDateUTC),
                            appointmentTime,
                        },
                    },
                },
            });
            if (!slot) {
                throw new graphql_1.GraphQLError(`Doctor is not available at ${appointmentTime} on ${appointmentDate}.`);
            }
            await Promise.all([
                prisma_config_1.default.appointment.create({
                    data: {
                        id: (0, uuid_1.v4)(),
                        doctorId: doctor.id,
                        patientId: patient.id,
                        appointmentDate: (0, date_fns_1.formatISO)(appointmentDateUTC),
                        appointmentTime,
                        slotId: slot.id,
                        status,
                    },
                }),
                prisma_config_1.default.slot.update({
                    where: { id: slot.id },
                    data: { isBooked: true },
                }),
            ]);
            return `Appointment created successfully with Dr. ${doctor.name} at ${appointmentTime} on ${appointmentDate}.`;
        }
        catch (error) {
            throw new graphql_1.GraphQLError("Failed to create appointment.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
    async updateAppointment(appointmentId, status, context, appointmentTime, appointmentDate) {
        try {
            const { user } = context;
            const existingAppointment = await prisma_config_1.default.appointment.findUnique({
                where: { id: appointmentId },
                include: { doctor: true, patient: true },
            });
            if (!existingAppointment || (user.role !== "PATIENT" && user.id !== existingAppointment.doctor.userId)) {
                throw new graphql_1.GraphQLError("Invalid or unauthorized request.");
            }
            (0, validation_1.validateStatus)(status);
            const parsedAppointmentDate = appointmentDate
                ? (0, validation_1.validateAppointmentDate)(appointmentDate)
                : existingAppointment.appointmentDate;
            await prisma_config_1.default.appointment.update({
                where: { id: appointmentId },
                data: {
                    status,
                    appointmentDate: parsedAppointmentDate,
                    appointmentTime: appointmentTime || existingAppointment.appointmentTime,
                },
            });
            return `Appointment updated successfully.`;
        }
        catch (error) {
            throw new graphql_1.GraphQLError("Failed to update appointment.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
    async deleteAppointment(appointmentId, context) {
        try {
            const { user } = context;
            const appointment = await prisma_config_1.default.appointment.findUnique({
                where: { id: appointmentId },
                include: { doctor: true, patient: true },
            });
            if (!appointment || (user.role !== "PATIENT" && user.id !== appointment.doctor.userId)) {
                throw new graphql_1.GraphQLError("Invalid or unauthorized request.");
            }
            await prisma_config_1.default.appointment.delete({ where: { id: appointmentId } });
            return `Appointment deleted successfully.`;
        }
        catch (error) {
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
    __param(1, (0, type_graphql_1.Arg)("status", () => type_graphql_2.AppointmentStatus, {
        defaultValue: type_graphql_2.AppointmentStatus.UPCOMING,
    })),
    __param(2, (0, type_graphql_1.Ctx)()),
    __param(3, (0, type_graphql_1.Arg)("appointmentTime", { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("appointmentDate", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, String, String]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "updateAppointment", null);
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
// Cron job optimization
node_cron_1.default.schedule("* * * * *", async () => {
    try {
        const currentDate = new Date();
        const appointments = await prisma_config_1.default.appointment.findMany({
            where: { status: { in: [type_graphql_2.AppointmentStatus.UPCOMING, type_graphql_2.AppointmentStatus.IN_PROGRESS] } },
            select: { id: true, appointmentDate: true, appointmentTime: true, status: true, slotId: true },
        });
        const updateTasks = appointments.map(async (appointment) => {
            const appointmentDateTime = new Date(`${appointment.appointmentDate.toISOString().split("T")[0]} ${appointment.appointmentTime}`);
            const oneHourAfterAppointment = new Date(appointmentDateTime.getTime() + 60 * 60 * 1000);
            if (appointment.status === type_graphql_2.AppointmentStatus.UPCOMING) {
                if (currentDate >= appointmentDateTime && currentDate < oneHourAfterAppointment) {
                    return prisma_config_1.default.appointment.update({ where: { id: appointment.id }, data: { status: type_graphql_2.AppointmentStatus.IN_PROGRESS } });
                }
                else if (currentDate >= oneHourAfterAppointment) {
                    return prisma_config_1.default.appointment.update({ where: { id: appointment.id }, data: { status: type_graphql_2.AppointmentStatus.MISSED } });
                }
            }
            else if (appointment.status === type_graphql_2.AppointmentStatus.IN_PROGRESS && currentDate >= oneHourAfterAppointment) {
                return prisma_config_1.default.appointment.update({ where: { id: appointment.id }, data: { status: type_graphql_2.AppointmentStatus.MISSED } });
            }
        });
        await Promise.all(updateTasks);
    }
    catch (error) {
        console.error("Error in cron job:", error);
    }
    finally {
        await prisma_config_1.default.$disconnect();
    }
});
