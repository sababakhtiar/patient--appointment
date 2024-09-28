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
exports.DoctorCount = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DoctorCountAppointmentsArgs_1 = require("./args/DoctorCountAppointmentsArgs");
const DoctorCountPatientsArgs_1 = require("./args/DoctorCountPatientsArgs");
const DoctorCountSlotsArgs_1 = require("./args/DoctorCountSlotsArgs");
let DoctorCount = class DoctorCount {
    patients;
    appointments;
    slots;
    getPatients(root, args) {
        return root.patients;
    }
    getAppointments(root, args) {
        return root.appointments;
    }
    getSlots(root, args) {
        return root.slots;
    }
};
exports.DoctorCount = DoctorCount;
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "patients",
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DoctorCount, DoctorCountPatientsArgs_1.DoctorCountPatientsArgs]),
    __metadata("design:returntype", Number)
], DoctorCount.prototype, "getPatients", null);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "appointments",
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DoctorCount, DoctorCountAppointmentsArgs_1.DoctorCountAppointmentsArgs]),
    __metadata("design:returntype", Number)
], DoctorCount.prototype, "getAppointments", null);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "slots",
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DoctorCount, DoctorCountSlotsArgs_1.DoctorCountSlotsArgs]),
    __metadata("design:returntype", Number)
], DoctorCount.prototype, "getSlots", null);
exports.DoctorCount = DoctorCount = __decorate([
    TypeGraphQL.ObjectType("DoctorCount", {})
], DoctorCount);
