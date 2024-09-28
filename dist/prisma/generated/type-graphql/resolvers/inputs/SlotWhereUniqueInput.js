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
exports.SlotWhereUniqueInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentListRelationFilter_1 = require("../inputs/AppointmentListRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DoctorRelationFilter_1 = require("../inputs/DoctorRelationFilter");
const SlotDoctorIdTimeCompoundUniqueInput_1 = require("../inputs/SlotDoctorIdTimeCompoundUniqueInput");
const SlotWhereInput_1 = require("../inputs/SlotWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let SlotWhereUniqueInput = class SlotWhereUniqueInput {
    id;
    doctorId_time;
    AND;
    OR;
    NOT;
    doctorId;
    time;
    isBooked;
    doctor;
    appointments;
};
exports.SlotWhereUniqueInput = SlotWhereUniqueInput;
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotWhereUniqueInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotDoctorIdTimeCompoundUniqueInput_1.SlotDoctorIdTimeCompoundUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotWhereUniqueInput.prototype, "doctorId_time", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotWhereInput_1.SlotWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotWhereInput_1.SlotWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotWhereInput_1.SlotWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotWhereUniqueInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotWhereUniqueInput.prototype, "time", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotWhereUniqueInput.prototype, "isBooked", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorRelationFilter_1.DoctorRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotWhereUniqueInput.prototype, "doctor", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentListRelationFilter_1.AppointmentListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotWhereUniqueInput.prototype, "appointments", void 0);
exports.SlotWhereUniqueInput = SlotWhereUniqueInput = __decorate([
    TypeGraphQL.InputType("SlotWhereUniqueInput", {})
], SlotWhereUniqueInput);