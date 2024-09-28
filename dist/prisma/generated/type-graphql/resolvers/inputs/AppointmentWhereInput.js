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
exports.AppointmentWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DoctorRelationFilter_1 = require("../inputs/DoctorRelationFilter");
const EnumAppointmentStatusFilter_1 = require("../inputs/EnumAppointmentStatusFilter");
const PatientRelationFilter_1 = require("../inputs/PatientRelationFilter");
const SlotNullableRelationFilter_1 = require("../inputs/SlotNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let AppointmentWhereInput = class AppointmentWhereInput {
    AND;
    OR;
    NOT;
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
exports.AppointmentWhereInput = AppointmentWhereInput;
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "patientId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "slotId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "appointmentDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "appointmentTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumAppointmentStatusFilter_1.EnumAppointmentStatusFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "status", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorRelationFilter_1.DoctorRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "doctor", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientRelationFilter_1.PatientRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "patient", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotNullableRelationFilter_1.SlotNullableRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "slot", void 0);
exports.AppointmentWhereInput = AppointmentWhereInput = __decorate([
    TypeGraphQL.InputType("AppointmentWhereInput", {})
], AppointmentWhereInput);