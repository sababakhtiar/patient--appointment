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
exports.PatientResolver = void 0;
const type_graphql_1 = require("type-graphql");
const uuid_1 = require("uuid");
const graphql_1 = require("graphql");
const cloudinary_1 = require("../utils/cloudinary");
const validation_1 = require("../utils/validation");
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const isAuth_1 = require("../middleware/isAuth");
const prisma_config_1 = __importDefault(require("../libs/prisma.config"));
let PatientResolver = class PatientResolver {
    async getAllDoctors(context) {
        try {
            const user = context.user;
            if (user.role !== "PATIENT") {
                throw new graphql_1.GraphQLError("Only patients can view doctor lists.");
            }
            return await prisma_config_1.default.doctor.findMany();
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to fetch doctors.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
    async addPatient(name, email, phoneNumber, address, age, gender, medicalRecord, prescriptions, photo, doctorId, context) {
        try {
            const user = context.user;
            if (user.role !== "PATIENT") {
                throw new graphql_1.GraphQLError("Only patients can add their own information.");
            }
            (0, validation_1.validateName)(name);
            (0, validation_1.validateEmail)(email);
            (0, validation_1.validatePhoneNumber)(phoneNumber);
            (0, validation_1.validateNonEmpty)(address, "address");
            (0, validation_1.validateNonEmpty)(medicalRecord, "medical record");
            (0, validation_1.validateGender)(gender);
            const uploadedProfilePhoto = await (0, cloudinary_1.uploadToCloudinary)(photo);
            const uploadedPrescriptionPhotos = [];
            for (const prescription of prescriptions) {
                const uploadedPrescription = await (0, cloudinary_1.uploadToCloudinary)(prescription);
                uploadedPrescriptionPhotos.push(uploadedPrescription);
            }
            const selectedDoctor = await prisma_config_1.default.doctor.findUnique({
                where: { id: doctorId },
            });
            if (!selectedDoctor) {
                throw new graphql_1.GraphQLError("Selected doctor does not exist.");
            }
            const existingPatient = await prisma_config_1.default.patient.findUnique({
                where: { userId: user.id },
            });
            if (existingPatient) {
                throw new graphql_1.GraphQLError("Patient already exists.");
            }
            const patient = await prisma_config_1.default.patient.create({
                data: {
                    id: (0, uuid_1.v4)(),
                    name,
                    email,
                    phoneNumber,
                    address,
                    age,
                    gender: gender,
                    medicalRecord,
                    prescriptions: uploadedPrescriptionPhotos,
                    photo: uploadedProfilePhoto,
                    doctorId: selectedDoctor.id,
                    userId: user.id,
                },
            });
            return `Patient ${patient.name} added successfully under Doctor ${selectedDoctor?.name || "none"}.`;
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to add patient.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
};
exports.PatientResolver = PatientResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Doctor]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "getAllDoctors", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __param(1, (0, type_graphql_1.Arg)("email")),
    __param(2, (0, type_graphql_1.Arg)("phoneNumber")),
    __param(3, (0, type_graphql_1.Arg)("address")),
    __param(4, (0, type_graphql_1.Arg)("age")),
    __param(5, (0, type_graphql_1.Arg)("gender")),
    __param(6, (0, type_graphql_1.Arg)("medicalRecord")),
    __param(7, (0, type_graphql_1.Arg)("prescriptions", () => [String])),
    __param(8, (0, type_graphql_1.Arg)("photo")),
    __param(9, (0, type_graphql_1.Arg)("doctorId", { nullable: true })),
    __param(10, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, String, String, Array, String, String, Object]),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "addPatient", null);
exports.PatientResolver = PatientResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], PatientResolver);
