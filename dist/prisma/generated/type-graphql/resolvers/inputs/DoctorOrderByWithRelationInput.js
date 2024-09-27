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
exports.DoctorOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentOrderByRelationAggregateInput_1 = require("../inputs/AppointmentOrderByRelationAggregateInput");
const PatientOrderByRelationAggregateInput_1 = require("../inputs/PatientOrderByRelationAggregateInput");
const SlotOrderByRelationAggregateInput_1 = require("../inputs/SlotOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DoctorOrderByWithRelationInput = class DoctorOrderByWithRelationInput {
    id;
    userId;
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
exports.DoctorOrderByWithRelationInput = DoctorOrderByWithRelationInput;
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "profilePhoto", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientOrderByRelationAggregateInput_1.PatientOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "patients", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentOrderByRelationAggregateInput_1.AppointmentOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "appointments", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotOrderByRelationAggregateInput_1.SlotOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorOrderByWithRelationInput.prototype, "slots", void 0);
exports.DoctorOrderByWithRelationInput = DoctorOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType("DoctorOrderByWithRelationInput", {})
], DoctorOrderByWithRelationInput);
