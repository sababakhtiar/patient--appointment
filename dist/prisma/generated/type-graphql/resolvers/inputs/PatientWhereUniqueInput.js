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
exports.PatientWhereUniqueInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentListRelationFilter_1 = require("../inputs/AppointmentListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DoctorRelationFilter_1 = require("../inputs/DoctorRelationFilter");
const EnumGenderFilter_1 = require("../inputs/EnumGenderFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PatientWhereInput_1 = require("../inputs/PatientWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let PatientWhereUniqueInput = class PatientWhereUniqueInput {
    id;
    email;
    userId;
    AND;
    OR;
    NOT;
    name;
    phoneNumber;
    address;
    age;
    gender;
    medicalRecord;
    prescriptions;
    photo;
    createdAt;
    updatedAt;
    doctorId;
    user;
    doctor;
    appointments;
};
exports.PatientWhereUniqueInput = PatientWhereUniqueInput;
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientWhereInput_1.PatientWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientWhereInput_1.PatientWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientWhereInput_1.PatientWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "phoneNumber", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumGenderFilter_1.EnumGenderFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "medicalRecord", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "prescriptions", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "photo", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorRelationFilter_1.DoctorRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "doctor", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentListRelationFilter_1.AppointmentListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientWhereUniqueInput.prototype, "appointments", void 0);
exports.PatientWhereUniqueInput = PatientWhereUniqueInput = __decorate([
    TypeGraphQL.InputType("PatientWhereUniqueInput", {})
], PatientWhereUniqueInput);
