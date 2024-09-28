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
exports.AppointmentRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Appointment_1 = require("../../../models/Appointment");
const Doctor_1 = require("../../../models/Doctor");
const Patient_1 = require("../../../models/Patient");
const Slot_1 = require("../../../models/Slot");
const AppointmentSlotArgs_1 = require("./args/AppointmentSlotArgs");
const helpers_1 = require("../../../helpers");
let AppointmentRelationsResolver = class AppointmentRelationsResolver {
    async doctor(appointment, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.findUniqueOrThrow({
            where: {
                id: appointment.id,
            },
        }).doctor({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async patient(appointment, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.findUniqueOrThrow({
            where: {
                id: appointment.id,
            },
        }).patient({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async slot(appointment, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.findUniqueOrThrow({
            where: {
                id: appointment.id,
            },
        }).slot({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.AppointmentRelationsResolver = AppointmentRelationsResolver;
__decorate([
    TypeGraphQL.FieldResolver(_type => Doctor_1.Doctor, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Appointment_1.Appointment, Object, Object]),
    __metadata("design:returntype", Promise)
], AppointmentRelationsResolver.prototype, "doctor", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Patient_1.Patient, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Appointment_1.Appointment, Object, Object]),
    __metadata("design:returntype", Promise)
], AppointmentRelationsResolver.prototype, "patient", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Slot_1.Slot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Appointment_1.Appointment, Object, Object, AppointmentSlotArgs_1.AppointmentSlotArgs]),
    __metadata("design:returntype", Promise)
], AppointmentRelationsResolver.prototype, "slot", null);
exports.AppointmentRelationsResolver = AppointmentRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Appointment_1.Appointment)
], AppointmentRelationsResolver);
