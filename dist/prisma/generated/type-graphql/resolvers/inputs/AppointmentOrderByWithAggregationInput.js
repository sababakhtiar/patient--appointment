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
exports.AppointmentOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentCountOrderByAggregateInput_1 = require("../inputs/AppointmentCountOrderByAggregateInput");
const AppointmentMaxOrderByAggregateInput_1 = require("../inputs/AppointmentMaxOrderByAggregateInput");
const AppointmentMinOrderByAggregateInput_1 = require("../inputs/AppointmentMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AppointmentOrderByWithAggregationInput = class AppointmentOrderByWithAggregationInput {
    id;
    doctorId;
    patientId;
    slotId;
    appointmentDate;
    appointmentTime;
    status;
    createdAt;
    updatedAt;
    _count;
    _max;
    _min;
};
exports.AppointmentOrderByWithAggregationInput = AppointmentOrderByWithAggregationInput;
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "doctorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "patientId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "slotId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "appointmentDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "appointmentTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "status", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentCountOrderByAggregateInput_1.AppointmentCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentMaxOrderByAggregateInput_1.AppointmentMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentMinOrderByAggregateInput_1.AppointmentMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentOrderByWithAggregationInput.prototype, "_min", void 0);
exports.AppointmentOrderByWithAggregationInput = AppointmentOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("AppointmentOrderByWithAggregationInput", {})
], AppointmentOrderByWithAggregationInput);
