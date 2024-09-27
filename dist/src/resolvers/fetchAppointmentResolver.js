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
exports.AppointmentfetchResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const graphql_1 = require("graphql");
const isAuth_1 = require("../middleware/isAuth");
const prisma_config_1 = __importDefault(require("../libs/prisma.config"));
let AppointmentfetchResolver = class AppointmentfetchResolver {
    async fetchMyAppointments(context) {
        try {
            const user = context.user;
            if (!user) {
                throw new graphql_1.GraphQLError("Invalid or missing token.");
            }
            let appointments;
            if (user.role === "PATIENT") {
                const patient = await prisma_config_1.default.patient.findUnique({
                    where: { userId: user.id },
                });
                if (!patient) {
                    throw new graphql_1.GraphQLError("Patient profile does not exist.");
                }
                appointments = await prisma_config_1.default.appointment.findMany({
                    where: {
                        patientId: patient.id,
                    },
                    include: {
                        doctor: true,
                    },
                });
            }
            else if (user.role === "DOCTOR") {
                const doctor = await prisma_config_1.default.doctor.findUnique({
                    where: { userId: user.id },
                });
                if (!doctor) {
                    throw new graphql_1.GraphQLError("Doctor profile does not exist.");
                }
                appointments = await prisma_config_1.default.appointment.findMany({
                    where: {
                        doctorId: doctor.id,
                    },
                    include: {
                        patient: true,
                    },
                });
            }
            else {
                throw new graphql_1.GraphQLError("Only doctors or patients can fetch appointments.");
            }
            return appointments;
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to fetch appointments.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
};
exports.AppointmentfetchResolver = AppointmentfetchResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Appointment]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppointmentfetchResolver.prototype, "fetchMyAppointments", null);
exports.AppointmentfetchResolver = AppointmentfetchResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AppointmentfetchResolver);
