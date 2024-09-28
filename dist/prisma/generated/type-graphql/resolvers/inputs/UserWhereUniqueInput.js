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
exports.UserWhereUniqueInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const DoctorListRelationFilter_1 = require("../inputs/DoctorListRelationFilter");
const EnumUserRoleFilter_1 = require("../inputs/EnumUserRoleFilter");
const PatientListRelationFilter_1 = require("../inputs/PatientListRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserWhereUniqueInput = class UserWhereUniqueInput {
    id;
    email;
    mobileNo;
    AND;
    OR;
    NOT;
    name;
    password;
    otp;
    otpExpires;
    role;
    createdAt;
    updatedAt;
    doctor;
    Patient;
};
exports.UserWhereUniqueInput = UserWhereUniqueInput;
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "mobileNo", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "otp", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "otpExpires", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumUserRoleFilter_1.EnumUserRoleFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorListRelationFilter_1.DoctorListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "doctor", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientListRelationFilter_1.PatientListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "Patient", void 0);
exports.UserWhereUniqueInput = UserWhereUniqueInput = __decorate([
    TypeGraphQL.InputType("UserWhereUniqueInput", {})
], UserWhereUniqueInput);
