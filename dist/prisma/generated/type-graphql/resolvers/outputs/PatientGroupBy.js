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
exports.PatientGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PatientAvgAggregate_1 = require("../outputs/PatientAvgAggregate");
const PatientCountAggregate_1 = require("../outputs/PatientCountAggregate");
const PatientMaxAggregate_1 = require("../outputs/PatientMaxAggregate");
const PatientMinAggregate_1 = require("../outputs/PatientMinAggregate");
const PatientSumAggregate_1 = require("../outputs/PatientSumAggregate");
const Gender_1 = require("../../enums/Gender");
let PatientGroupBy = class PatientGroupBy {
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
    _count;
    _avg;
    _sum;
    _min;
    _max;
};
exports.PatientGroupBy = PatientGroupBy;
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientGroupBy.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientGroupBy.prototype, "phoneNumber", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientGroupBy.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], PatientGroupBy.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientGroupBy.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientGroupBy.prototype, "medicalRecord", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientGroupBy.prototype, "prescriptions", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientGroupBy.prototype, "photo", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], PatientGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], PatientGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientGroupBy.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PatientGroupBy.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientCountAggregate_1.PatientCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientAvgAggregate_1.PatientAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientSumAggregate_1.PatientSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientMinAggregate_1.PatientMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientMaxAggregate_1.PatientMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientGroupBy.prototype, "_max", void 0);
exports.PatientGroupBy = PatientGroupBy = __decorate([
    TypeGraphQL.ObjectType("PatientGroupBy", {})
], PatientGroupBy);
