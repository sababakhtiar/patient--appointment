"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Appointment_1 = require("../../../models/Appointment");
const Doctor_1 = require("../../../models/Doctor");
const Patient_1 = require("../../../models/Patient");
const Slot_1 = require("../../../models/Slot");
const User_1 = require("../../../models/User");
const DoctorAppointmentsArgs_1 = require("./args/DoctorAppointmentsArgs");
const DoctorPatientsArgs_1 = require("./args/DoctorPatientsArgs");
const DoctorSlotsArgs_1 = require("./args/DoctorSlotsArgs");
const helpers_1 = require("../../../helpers");
let DoctorRelationsResolver = class DoctorRelationsResolver {
    async user(doctor, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.findUniqueOrThrow({
            where: {
                id: doctor.id,
            },
        }).user({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async patients(doctor, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.findUniqueOrThrow({
            where: {
                id: doctor.id,
            },
        }).patients({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async appointments(doctor, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.findUniqueOrThrow({
            where: {
                id: doctor.id,
            },
        }).appointments({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async slots(doctor, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.findUniqueOrThrow({
            where: {
                id: doctor.id,
            },
        }).slots({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DoctorRelationsResolver = DoctorRelationsResolver;
__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Doctor_1.Doctor, Object, Object]),
    __metadata("design:returntype", Promise)
], DoctorRelationsResolver.prototype, "user", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Patient_1.Patient], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Doctor_1.Doctor, Object, Object, DoctorPatientsArgs_1.DoctorPatientsArgs]),
    __metadata("design:returntype", Promise)
], DoctorRelationsResolver.prototype, "patients", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Appointment_1.Appointment], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Doctor_1.Doctor, Object, Object, DoctorAppointmentsArgs_1.DoctorAppointmentsArgs]),
    __metadata("design:returntype", Promise)
], DoctorRelationsResolver.prototype, "appointments", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Slot_1.Slot], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Doctor_1.Doctor, Object, Object, DoctorSlotsArgs_1.DoctorSlotsArgs]),
    __metadata("design:returntype", Promise)
], DoctorRelationsResolver.prototype, "slots", null);
exports.DoctorRelationsResolver = DoctorRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Doctor_1.Doctor)
], DoctorRelationsResolver);
