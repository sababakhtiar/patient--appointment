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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DoctorOrderByWithRelationInput_1 = require("../inputs/DoctorOrderByWithRelationInput");
const PatientOrderByWithRelationInput_1 = require("../inputs/PatientOrderByWithRelationInput");
const SlotOrderByWithRelationInput_1 = require("../inputs/SlotOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AppointmentOrderByWithRelationInput = class AppointmentOrderByWithRelationInput {
    id;
    doctorId;
    patientId;
    slotId;
    appointmentDate;
    appointmentTime;
    status;
    createdAt;
    updatedAt;
    doctor;
    patient;
    slot;
};
exports.AppointmentOrderByWithRelationInput = AppointmentOrderByWithRelationInput;
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "patientId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "slotId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "appointmentDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "appointmentTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "status", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorOrderByWithRelationInput_1.DoctorOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "doctor", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientOrderByWithRelationInput_1.PatientOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "patient", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotOrderByWithRelationInput_1.SlotOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithRelationInput.prototype, "slot", void 0);
exports.AppointmentOrderByWithRelationInput = AppointmentOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType("AppointmentOrderByWithRelationInput", {})
], AppointmentOrderByWithRelationInput);
