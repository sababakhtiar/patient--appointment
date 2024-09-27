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
exports.FilterResolver = void 0;
const type_graphql_1 = require("type-graphql");
const client_1 = require("@prisma/client");
const graphql_1 = require("graphql");
const isAuth_1 = require("../middleware/isAuth");
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const prisma_config_1 = __importDefault(require("../libs/prisma.config"));
let FilterResolver = class FilterResolver {
    async getPatientsByDoctor(context, gender, ageRange, status) {
        try {
            const user = context.user;
            if (!user) {
                throw new graphql_1.GraphQLError("Invalid or missing token.");
            }
            if (user.role !== "DOCTOR") {
                throw new graphql_1.GraphQLError("Only doctors can access this data.");
            }
            const doctor = await prisma_config_1.default.doctor.findUnique({
                where: { id: user.id },
            });
            if (!doctor) {
                throw new graphql_1.GraphQLError(`Doctor does not exist.`);
            }
            const patientFilters = {
                doctorId: doctor.id,
            };
            if (gender) {
                patientFilters.gender = gender;
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
                }
                else if (minAge) {
                    patientFilters.age = {
                        gte: minAge,
                    };
                }
            }
            const patients = await prisma_config_1.default.patient.findMany({
                where: patientFilters,
                include: {
                    appointments: {
                        where: status ? { status } : {},
                    },
                },
            });
            if (!patients.length) {
                throw new graphql_1.GraphQLError("No patients found with the given criteria.");
            }
            const filteredPatients = patients.filter((patient) => patient.appointments.length > 0);
            return filteredPatients;
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("An error occurred while fetching patients.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
};
exports.FilterResolver = FilterResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Patient]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("gender", () => type_graphql_2.Gender, { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("ageRange", { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)("status", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], FilterResolver.prototype, "getPatientsByDoctor", null);
exports.FilterResolver = FilterResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], FilterResolver);
