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
exports.StringFilter = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NestedStringFilter_1 = require("../inputs/NestedStringFilter");
const QueryMode_1 = require("../../enums/QueryMode");
let StringFilter = class StringFilter {
    equals;
    in;
    notIn;
    lt;
    lte;
    gt;
    gte;
    contains;
    startsWith;
    endsWith;
    mode;
    not;
};
exports.StringFilter = StringFilter;
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "contains", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "startsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "endsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => QueryMode_1.QueryMode, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "mode", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "not", void 0);
exports.StringFilter = StringFilter = __decorate([
    TypeGraphQL.InputType("StringFilter", {})
], StringFilter);
