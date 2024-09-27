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
exports.PatientOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PatientAvgOrderByAggregateInput_1 = require("../inputs/PatientAvgOrderByAggregateInput");
const PatientCountOrderByAggregateInput_1 = require("../inputs/PatientCountOrderByAggregateInput");
const PatientMaxOrderByAggregateInput_1 = require("../inputs/PatientMaxOrderByAggregateInput");
const PatientMinOrderByAggregateInput_1 = require("../inputs/PatientMinOrderByAggregateInput");
const PatientSumOrderByAggregateInput_1 = require("../inputs/PatientSumOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PatientOrderByWithAggregationInput = class PatientOrderByWithAggregationInput {
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
    _max;
    _min;
    _sum;
};
exports.PatientOrderByWithAggregationInput = PatientOrderByWithAggregationInput;
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "phoneNumber", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "medicalRecord", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "prescriptions", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "photo", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientCountOrderByAggregateInput_1.PatientCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientAvgOrderByAggregateInput_1.PatientAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientMaxOrderByAggregateInput_1.PatientMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientMinOrderByAggregateInput_1.PatientMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientSumOrderByAggregateInput_1.PatientSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.PatientOrderByWithAggregationInput = PatientOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("PatientOrderByWithAggregationInput", {})
], PatientOrderByWithAggregationInput);
