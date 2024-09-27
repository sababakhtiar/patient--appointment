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
exports.CreateManyAndReturnPatient = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Doctor_1 = require("../../models/Doctor");
const User_1 = require("../../models/User");
const Gender_1 = require("../../enums/Gender");
let CreateManyAndReturnPatient = class CreateManyAndReturnPatient {
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
    userId;
    doctorId;
    user;
    doctor;
};
exports.CreateManyAndReturnPatient = CreateManyAndReturnPatient;
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnPatient.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnPatient.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CreateManyAndReturnPatient.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnPatient.prototype, "phoneNumber", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnPatient.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CreateManyAndReturnPatient.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnPatient.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnPatient.prototype, "medicalRecord", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CreateManyAndReturnPatient.prototype, "prescriptions", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnPatient.prototype, "photo", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CreateManyAndReturnPatient.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CreateManyAndReturnPatient.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnPatient.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnPatient.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        nullable: false
    }),
    __metadata("design:type", User_1.User)
], CreateManyAndReturnPatient.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => Doctor_1.Doctor, {
        nullable: false
    }),
    __metadata("design:type", Doctor_1.Doctor)
], CreateManyAndReturnPatient.prototype, "doctor", void 0);
exports.CreateManyAndReturnPatient = CreateManyAndReturnPatient = __decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnPatient", {})
], CreateManyAndReturnPatient);
