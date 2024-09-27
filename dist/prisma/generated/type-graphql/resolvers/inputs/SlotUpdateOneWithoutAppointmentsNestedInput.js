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
exports.SlotUpdateOneWithoutAppointmentsNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SlotCreateOrConnectWithoutAppointmentsInput_1 = require("../inputs/SlotCreateOrConnectWithoutAppointmentsInput");
const SlotCreateWithoutAppointmentsInput_1 = require("../inputs/SlotCreateWithoutAppointmentsInput");
const SlotUpdateToOneWithWhereWithoutAppointmentsInput_1 = require("../inputs/SlotUpdateToOneWithWhereWithoutAppointmentsInput");
const SlotUpsertWithoutAppointmentsInput_1 = require("../inputs/SlotUpsertWithoutAppointmentsInput");
const SlotWhereInput_1 = require("../inputs/SlotWhereInput");
const SlotWhereUniqueInput_1 = require("../inputs/SlotWhereUniqueInput");
let SlotUpdateOneWithoutAppointmentsNestedInput = class SlotUpdateOneWithoutAppointmentsNestedInput {
    create;
    connectOrCreate;
    upsert;
    disconnect;
    delete;
    connect;
    update;
};
exports.SlotUpdateOneWithoutAppointmentsNestedInput = SlotUpdateOneWithoutAppointmentsNestedInput;
__decorate([
    TypeGraphQL.Field(_type => SlotCreateWithoutAppointmentsInput_1.SlotCreateWithoutAppointmentsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateOneWithoutAppointmentsNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotCreateOrConnectWithoutAppointmentsInput_1.SlotCreateOrConnectWithoutAppointmentsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateOneWithoutAppointmentsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotUpsertWithoutAppointmentsInput_1.SlotUpsertWithoutAppointmentsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateOneWithoutAppointmentsNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotWhereInput_1.SlotWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateOneWithoutAppointmentsNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotWhereInput_1.SlotWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateOneWithoutAppointmentsNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotWhereUniqueInput_1.SlotWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateOneWithoutAppointmentsNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotUpdateToOneWithWhereWithoutAppointmentsInput_1.SlotUpdateToOneWithWhereWithoutAppointmentsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateOneWithoutAppointmentsNestedInput.prototype, "update", void 0);
exports.SlotUpdateOneWithoutAppointmentsNestedInput = SlotUpdateOneWithoutAppointmentsNestedInput = __decorate([
    TypeGraphQL.InputType("SlotUpdateOneWithoutAppointmentsNestedInput", {})
], SlotUpdateOneWithoutAppointmentsNestedInput);
