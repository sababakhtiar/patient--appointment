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
exports.SlotUpdateManyWithoutDoctorNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SlotCreateManyDoctorInputEnvelope_1 = require("../inputs/SlotCreateManyDoctorInputEnvelope");
const SlotCreateOrConnectWithoutDoctorInput_1 = require("../inputs/SlotCreateOrConnectWithoutDoctorInput");
const SlotCreateWithoutDoctorInput_1 = require("../inputs/SlotCreateWithoutDoctorInput");
const SlotScalarWhereInput_1 = require("../inputs/SlotScalarWhereInput");
const SlotUpdateManyWithWhereWithoutDoctorInput_1 = require("../inputs/SlotUpdateManyWithWhereWithoutDoctorInput");
const SlotUpdateWithWhereUniqueWithoutDoctorInput_1 = require("../inputs/SlotUpdateWithWhereUniqueWithoutDoctorInput");
const SlotUpsertWithWhereUniqueWithoutDoctorInput_1 = require("../inputs/SlotUpsertWithWhereUniqueWithoutDoctorInput");
const SlotWhereUniqueInput_1 = require("../inputs/SlotWhereUniqueInput");
let SlotUpdateManyWithoutDoctorNestedInput = class SlotUpdateManyWithoutDoctorNestedInput {
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
exports.SlotUpdateManyWithoutDoctorNestedInput = SlotUpdateManyWithoutDoctorNestedInput;
__decorate([
    TypeGraphQL.Field(_type => [SlotCreateWithoutDoctorInput_1.SlotCreateWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateManyWithoutDoctorNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotCreateOrConnectWithoutDoctorInput_1.SlotCreateOrConnectWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateManyWithoutDoctorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotUpsertWithWhereUniqueWithoutDoctorInput_1.SlotUpsertWithWhereUniqueWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateManyWithoutDoctorNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => SlotCreateManyDoctorInputEnvelope_1.SlotCreateManyDoctorInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateManyWithoutDoctorNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotWhereUniqueInput_1.SlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateManyWithoutDoctorNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotWhereUniqueInput_1.SlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateManyWithoutDoctorNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotWhereUniqueInput_1.SlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateManyWithoutDoctorNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotWhereUniqueInput_1.SlotWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateManyWithoutDoctorNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotUpdateWithWhereUniqueWithoutDoctorInput_1.SlotUpdateWithWhereUniqueWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateManyWithoutDoctorNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotUpdateManyWithWhereWithoutDoctorInput_1.SlotUpdateManyWithWhereWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateManyWithoutDoctorNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SlotScalarWhereInput_1.SlotScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SlotUpdateManyWithoutDoctorNestedInput.prototype, "deleteMany", void 0);
exports.SlotUpdateManyWithoutDoctorNestedInput = SlotUpdateManyWithoutDoctorNestedInput = __decorate([
    TypeGraphQL.InputType("SlotUpdateManyWithoutDoctorNestedInput", {})
], SlotUpdateManyWithoutDoctorNestedInput);
