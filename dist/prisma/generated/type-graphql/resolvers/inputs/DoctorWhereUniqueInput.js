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
exports.DoctorWhereUniqueInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentListRelationFilter_1 = require("../inputs/AppointmentListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DoctorWhereInput_1 = require("../inputs/DoctorWhereInput");
const EnumGenderFilter_1 = require("../inputs/EnumGenderFilter");
const PatientListRelationFilter_1 = require("../inputs/PatientListRelationFilter");
const SlotListRelationFilter_1 = require("../inputs/SlotListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let DoctorWhereUniqueInput = class DoctorWhereUniqueInput {
    id;
    userId;
    AND;
    OR;
    NOT;
    name;
    email;
    profilePhoto;
    gender;
    createdAt;
    updatedAt;
    user;
    patients;
    appointments;
    slots;
};
exports.DoctorWhereUniqueInput = DoctorWhereUniqueInput;
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorWhereInput_1.DoctorWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorWhereInput_1.DoctorWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorWhereInput_1.DoctorWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "profilePhoto", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumGenderFilter_1.EnumGenderFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientListRelationFilter_1.PatientListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "patients", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentListRelationFilter_1.AppointmentListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "appointments", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotListRelationFilter_1.SlotListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorWhereUniqueInput.prototype, "slots", void 0);
exports.DoctorWhereUniqueInput = DoctorWhereUniqueInput = __decorate([
    TypeGraphQL.InputType("DoctorWhereUniqueInput", {})
], DoctorWhereUniqueInput);
