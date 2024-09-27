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
exports.PatientUpdateWithoutUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentUpdateManyWithoutPatientNestedInput_1 = require("../inputs/AppointmentUpdateManyWithoutPatientNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DoctorUpdateOneRequiredWithoutPatientsNestedInput_1 = require("../inputs/DoctorUpdateOneRequiredWithoutPatientsNestedInput");
const EnumGenderFieldUpdateOperationsInput_1 = require("../inputs/EnumGenderFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PatientUpdateprescriptionsInput_1 = require("../inputs/PatientUpdateprescriptionsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PatientUpdateWithoutUserInput = class PatientUpdateWithoutUserInput {
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
    doctor;
    appointments;
};
exports.PatientUpdateWithoutUserInput = PatientUpdateWithoutUserInput;
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "phoneNumber", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumGenderFieldUpdateOperationsInput_1.EnumGenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "medicalRecord", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientUpdateprescriptionsInput_1.PatientUpdateprescriptionsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "prescriptions", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "photo", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorUpdateOneRequiredWithoutPatientsNestedInput_1.DoctorUpdateOneRequiredWithoutPatientsNestedInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "doctor", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentUpdateManyWithoutPatientNestedInput_1.AppointmentUpdateManyWithoutPatientNestedInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateWithoutUserInput.prototype, "appointments", void 0);
exports.PatientUpdateWithoutUserInput = PatientUpdateWithoutUserInput = __decorate([
    TypeGraphQL.InputType("PatientUpdateWithoutUserInput", {})
], PatientUpdateWithoutUserInput);
