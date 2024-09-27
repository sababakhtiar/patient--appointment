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
exports.PatientUpdateManyWithoutUserNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PatientCreateManyUserInputEnvelope_1 = require("../inputs/PatientCreateManyUserInputEnvelope");
const PatientCreateOrConnectWithoutUserInput_1 = require("../inputs/PatientCreateOrConnectWithoutUserInput");
const PatientCreateWithoutUserInput_1 = require("../inputs/PatientCreateWithoutUserInput");
const PatientScalarWhereInput_1 = require("../inputs/PatientScalarWhereInput");
const PatientUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/PatientUpdateManyWithWhereWithoutUserInput");
const PatientUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/PatientUpdateWithWhereUniqueWithoutUserInput");
const PatientUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/PatientUpsertWithWhereUniqueWithoutUserInput");
const PatientWhereUniqueInput_1 = require("../inputs/PatientWhereUniqueInput");
let PatientUpdateManyWithoutUserNestedInput = class PatientUpdateManyWithoutUserNestedInput {
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
exports.PatientUpdateManyWithoutUserNestedInput = PatientUpdateManyWithoutUserNestedInput;
__decorate([
    TypeGraphQL.Field(_type => [PatientCreateWithoutUserInput_1.PatientCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientCreateOrConnectWithoutUserInput_1.PatientCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientUpsertWithWhereUniqueWithoutUserInput_1.PatientUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientCreateManyUserInputEnvelope_1.PatientCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientWhereUniqueInput_1.PatientWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientWhereUniqueInput_1.PatientWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientWhereUniqueInput_1.PatientWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientWhereUniqueInput_1.PatientWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientUpdateWithWhereUniqueWithoutUserInput_1.PatientUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientUpdateManyWithWhereWithoutUserInput_1.PatientUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientScalarWhereInput_1.PatientScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.PatientUpdateManyWithoutUserNestedInput = PatientUpdateManyWithoutUserNestedInput = __decorate([
    TypeGraphQL.InputType("PatientUpdateManyWithoutUserNestedInput", {})
], PatientUpdateManyWithoutUserNestedInput);
