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
exports.UserUpdateOneRequiredWithoutDoctorNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutDoctorInput_1 = require("../inputs/UserCreateOrConnectWithoutDoctorInput");
const UserCreateWithoutDoctorInput_1 = require("../inputs/UserCreateWithoutDoctorInput");
const UserUpdateToOneWithWhereWithoutDoctorInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutDoctorInput");
const UserUpsertWithoutDoctorInput_1 = require("../inputs/UserUpsertWithoutDoctorInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutDoctorNestedInput = class UserUpdateOneRequiredWithoutDoctorNestedInput {
    create;
    connectOrCreate;
    upsert;
    connect;
    update;
};
exports.UserUpdateOneRequiredWithoutDoctorNestedInput = UserUpdateOneRequiredWithoutDoctorNestedInput;
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutDoctorInput_1.UserCreateWithoutDoctorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateOneRequiredWithoutDoctorNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDoctorInput_1.UserCreateOrConnectWithoutDoctorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateOneRequiredWithoutDoctorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutDoctorInput_1.UserUpsertWithoutDoctorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateOneRequiredWithoutDoctorNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateOneRequiredWithoutDoctorNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutDoctorInput_1.UserUpdateToOneWithWhereWithoutDoctorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateOneRequiredWithoutDoctorNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutDoctorNestedInput = UserUpdateOneRequiredWithoutDoctorNestedInput = __decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutDoctorNestedInput", {})
], UserUpdateOneRequiredWithoutDoctorNestedInput);
