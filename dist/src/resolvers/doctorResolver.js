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
exports.DoctorResolver = void 0;
const type_graphql_1 = require("type-graphql");
const uuid_1 = require("uuid");
const graphql_1 = require("graphql");
const cloudinary_1 = require("../utils/cloudinary");
const validation_1 = require("../utils/validation");
const isAuth_1 = require("../middleware/isAuth");
const prisma_config_1 = __importDefault(require("../libs/prisma.config"));
let DoctorResolver = class DoctorResolver {
    async addDoctor(name, email, profilePhoto, gender, slotTimes, context) {
        try {
            const user = context.user;
            if (user.role !== "DOCTOR") {
                throw new graphql_1.GraphQLError("Only doctors can create a doctor profile.");
            }
            (0, validation_1.validateName)(name);
            (0, validation_1.validateEmail)(email);
            (0, validation_1.validateGender)(gender);
            const uploadedProfilePhoto = await (0, cloudinary_1.uploadToCloudinary)(profilePhoto);
            const existingDoctor = await prisma_config_1.default.doctor.findUnique({
                where: { userId: user.id },
            });
            if (existingDoctor) {
                throw new graphql_1.GraphQLError("Doctor profile already exists.");
            }
            const doctor = await prisma_config_1.default.doctor.create({
                data: {
                    id: (0, uuid_1.v4)(),
                    userId: user.id,
                    name,
                    email,
                    profilePhoto: uploadedProfilePhoto,
                    gender: gender,
                },
            });
            const slotPromises = slotTimes.map(async (time) => {
                return await prisma_config_1.default.slot.create({
                    data: {
                        id: (0, uuid_1.v4)(),
                        doctorId: doctor.id,
                        time,
                        isBooked: false,
                    },
                });
            });
            await Promise.all(slotPromises);
            return `Doctor profile created successfully with available slots.`;
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to add doctor.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
    async updateDoctorProfile(context, name, email, profilePhoto, gender, slotTimes) {
        try {
            const user = context.user;
            if (user.role !== "DOCTOR") {
                throw new graphql_1.GraphQLError("Only doctors can update their profile.");
            }
            if (name)
                (0, validation_1.validateName)(name);
            if (email)
                (0, validation_1.validateEmail)(email);
            if (gender)
                (0, validation_1.validateGender)(gender);
            const doctor = await prisma_config_1.default.doctor.findUnique({
                where: { userId: user.id },
            });
            if (!doctor) {
                throw new graphql_1.GraphQLError("Doctor profile not found.");
            }
            let uploadedProfilePhoto = doctor.profilePhoto;
            if (profilePhoto) {
                uploadedProfilePhoto = await (0, cloudinary_1.uploadToCloudinary)(profilePhoto);
            }
            await prisma_config_1.default.doctor.update({
                where: { userId: user.id },
                data: {
                    name: name || doctor.name,
                    email: email || doctor.email,
                    profilePhoto: uploadedProfilePhoto,
                    gender: gender ? gender : doctor.gender,
                },
            });
            if (slotTimes && slotTimes.length > 0) {
                await prisma_config_1.default.slot.deleteMany({
                    where: { doctorId: doctor.id },
                });
                const slotPromises = slotTimes.map(async (time) => {
                    return await prisma_config_1.default.slot.create({
                        data: {
                            id: (0, uuid_1.v4)(),
                            doctorId: doctor.id,
                            time,
                            isBooked: false,
                        },
                    });
                });
                await Promise.all(slotPromises);
            }
            return "Doctor profile and available slots updated successfully.";
        }
        catch (error) {
            if (error instanceof graphql_1.GraphQLError) {
                throw error;
            }
            throw new graphql_1.GraphQLError("Failed to update doctor profile.", {
                extensions: { code: "INTERNAL_SERVER_ERROR" },
            });
        }
    }
};
exports.DoctorResolver = DoctorResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __param(1, (0, type_graphql_1.Arg)("email")),
    __param(2, (0, type_graphql_1.Arg)("profilePhoto")),
    __param(3, (0, type_graphql_1.Arg)("gender")),
    __param(4, (0, type_graphql_1.Arg)("slotTimes", () => [String])),
    __param(5, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Array, Object]),
    __metadata("design:returntype", Promise)
], DoctorResolver.prototype, "addDoctor", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("name", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("email", { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)("profilePhoto", { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("gender", { nullable: true })),
    __param(5, (0, type_graphql_1.Arg)("slotTimes", () => [String], { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, Array]),
    __metadata("design:returntype", Promise)
], DoctorResolver.prototype, "updateDoctorProfile", null);
exports.DoctorResolver = DoctorResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], DoctorResolver);
