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
exports.UserCount = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCountDoctorArgs_1 = require("./args/UserCountDoctorArgs");
const UserCountPatientArgs_1 = require("./args/UserCountPatientArgs");
let UserCount = class UserCount {
    doctor;
    Patient;
    getDoctor(root, args) {
        return root.doctor;
    }
    getPatient(root, args) {
        return root.Patient;
    }
};
exports.UserCount = UserCount;
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "doctor",
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserCount, UserCountDoctorArgs_1.UserCountDoctorArgs]),
    __metadata("design:returntype", Number)
], UserCount.prototype, "getDoctor", null);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "Patient",
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserCount, UserCountPatientArgs_1.UserCountPatientArgs]),
    __metadata("design:returntype", Number)
], UserCount.prototype, "getPatient", null);
exports.UserCount = UserCount = __decorate([
    TypeGraphQL.ObjectType("UserCount", {})
], UserCount);
