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
exports.DoctorUpdateManyWithoutUserNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DoctorCreateManyUserInputEnvelope_1 = require("../inputs/DoctorCreateManyUserInputEnvelope");
const DoctorCreateOrConnectWithoutUserInput_1 = require("../inputs/DoctorCreateOrConnectWithoutUserInput");
const DoctorCreateWithoutUserInput_1 = require("../inputs/DoctorCreateWithoutUserInput");
const DoctorScalarWhereInput_1 = require("../inputs/DoctorScalarWhereInput");
const DoctorUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/DoctorUpdateManyWithWhereWithoutUserInput");
const DoctorUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/DoctorUpdateWithWhereUniqueWithoutUserInput");
const DoctorUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/DoctorUpsertWithWhereUniqueWithoutUserInput");
const DoctorWhereUniqueInput_1 = require("../inputs/DoctorWhereUniqueInput");
let DoctorUpdateManyWithoutUserNestedInput = class DoctorUpdateManyWithoutUserNestedInput {
    create;
    connectOrCreate;
    upsert;
    createMany;
    set;
    disconnect;
    delete;
    connect;
    update;
    updateMany;
    deleteMany;
};
exports.DoctorUpdateManyWithoutUserNestedInput = DoctorUpdateManyWithoutUserNestedInput;
__decorate([
    TypeGraphQL.Field(_type => [DoctorCreateWithoutUserInput_1.DoctorCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorCreateOrConnectWithoutUserInput_1.DoctorCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorUpsertWithWhereUniqueWithoutUserInput_1.DoctorUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => DoctorCreateManyUserInputEnvelope_1.DoctorCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorWhereUniqueInput_1.DoctorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorWhereUniqueInput_1.DoctorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorWhereUniqueInput_1.DoctorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorWhereUniqueInput_1.DoctorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorUpdateWithWhereUniqueWithoutUserInput_1.DoctorUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorUpdateManyWithWhereWithoutUserInput_1.DoctorUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DoctorScalarWhereInput_1.DoctorScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DoctorUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.DoctorUpdateManyWithoutUserNestedInput = DoctorUpdateManyWithoutUserNestedInput = __decorate([
    TypeGraphQL.InputType("DoctorUpdateManyWithoutUserNestedInput", {})
], DoctorUpdateManyWithoutUserNestedInput);
