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
exports.FindFirstDoctorArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DoctorOrderByWithRelationInput_1 = require("../../../inputs/DoctorOrderByWithRelationInput");
const DoctorWhereInput_1 = require("../../../inputs/DoctorWhereInput");
const DoctorWhereUniqueInput_1 = require("../../../inputs/DoctorWhereUniqueInput");
const DoctorScalarFieldEnum_1 = require("../../../../enums/DoctorScalarFieldEnum");
let FindFirstDoctorArgs = class FindFirstDoctorArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstDoctorArgs = FindFirstDoctorArgs;
__decorate([
    TypeGraphQL.Field(_type => DoctorWhereInput_1.DoctorWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstDoctorArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorOrderByWithRelationInput_1.DoctorOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstDoctorArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorWhereUniqueInput_1.DoctorWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstDoctorArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstDoctorArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstDoctorArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorScalarFieldEnum_1.DoctorScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstDoctorArgs.prototype, "distinct", void 0);
exports.FindFirstDoctorArgs = FindFirstDoctorArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstDoctorArgs);
