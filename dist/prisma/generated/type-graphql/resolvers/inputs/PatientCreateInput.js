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
exports.PatientCreateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentCreateNestedManyWithoutPatientInput_1 = require("../inputs/AppointmentCreateNestedManyWithoutPatientInput");
const DoctorCreateNestedOneWithoutPatientsInput_1 = require("../inputs/DoctorCreateNestedOneWithoutPatientsInput");
const PatientCreateprescriptionsInput_1 = require("../inputs/PatientCreateprescriptionsInput");
const UserCreateNestedOneWithoutPatientInput_1 = require("../inputs/UserCreateNestedOneWithoutPatientInput");
const Gender_1 = require("../../enums/Gender");
let PatientCreateInput = class PatientCreateInput {
    id;
    name;
    email;
    phoneNumber;
    address;
    age;
    gender;
    medicalRecord;
    prescriptions;
    photo;
    createdAt;
    updatedAt;
    user;
    doctor;
    appointments;
};
exports.PatientCreateInput = PatientCreateInput;
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientCreateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientCreateInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientCreateInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientCreateInput.prototype, "phoneNumber", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientCreateInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], PatientCreateInput.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientCreateInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientCreateInput.prototype, "medicalRecord", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientCreateprescriptionsInput_1.PatientCreateprescriptionsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientCreateInput.prototype, "prescriptions", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientCreateInput.prototype, "photo", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientCreateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientCreateInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPatientInput_1.UserCreateNestedOneWithoutPatientInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateNestedOneWithoutPatientInput_1.UserCreateNestedOneWithoutPatientInput)
], PatientCreateInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorCreateNestedOneWithoutPatientsInput_1.DoctorCreateNestedOneWithoutPatientsInput, {
        nullable: false
    }),
    __metadata("design:type", DoctorCreateNestedOneWithoutPatientsInput_1.DoctorCreateNestedOneWithoutPatientsInput)
], PatientCreateInput.prototype, "doctor", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentCreateNestedManyWithoutPatientInput_1.AppointmentCreateNestedManyWithoutPatientInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientCreateInput.prototype, "appointments", void 0);
exports.PatientCreateInput = PatientCreateInput = __decorate([
    TypeGraphQL.InputType("PatientCreateInput", {})
], PatientCreateInput);