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
exports.DoctorUpdateOneRequiredWithoutPatientsNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DoctorCreateOrConnectWithoutPatientsInput_1 = require("../inputs/DoctorCreateOrConnectWithoutPatientsInput");
const DoctorCreateWithoutPatientsInput_1 = require("../inputs/DoctorCreateWithoutPatientsInput");
const DoctorUpdateToOneWithWhereWithoutPatientsInput_1 = require("../inputs/DoctorUpdateToOneWithWhereWithoutPatientsInput");
const DoctorUpsertWithoutPatientsInput_1 = require("../inputs/DoctorUpsertWithoutPatientsInput");
const DoctorWhereUniqueInput_1 = require("../inputs/DoctorWhereUniqueInput");
let DoctorUpdateOneRequiredWithoutPatientsNestedInput = class DoctorUpdateOneRequiredWithoutPatientsNestedInput {
    create;
    connectOrCreate;
    upsert;
    connect;
    update;
};
exports.DoctorUpdateOneRequiredWithoutPatientsNestedInput = DoctorUpdateOneRequiredWithoutPatientsNestedInput;
__decorate([
    TypeGraphQL.Field(_type => DoctorCreateWithoutPatientsInput_1.DoctorCreateWithoutPatientsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateOneRequiredWithoutPatientsNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutPatientsInput_1.DoctorCreateOrConnectWithoutPatientsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateOneRequiredWithoutPatientsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorUpsertWithoutPatientsInput_1.DoctorUpsertWithoutPatientsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateOneRequiredWithoutPatientsNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorWhereUniqueInput_1.DoctorWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateOneRequiredWithoutPatientsNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorUpdateToOneWithWhereWithoutPatientsInput_1.DoctorUpdateToOneWithWhereWithoutPatientsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateOneRequiredWithoutPatientsNestedInput.prototype, "update", void 0);
exports.DoctorUpdateOneRequiredWithoutPatientsNestedInput = DoctorUpdateOneRequiredWithoutPatientsNestedInput = __decorate([
    TypeGraphQL.InputType("DoctorUpdateOneRequiredWithoutPatientsNestedInput", {})
], DoctorUpdateOneRequiredWithoutPatientsNestedInput);
