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
exports.PatientUpdateManyWithoutDoctorNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PatientCreateManyDoctorInputEnvelope_1 = require("../inputs/PatientCreateManyDoctorInputEnvelope");
const PatientCreateOrConnectWithoutDoctorInput_1 = require("../inputs/PatientCreateOrConnectWithoutDoctorInput");
const PatientCreateWithoutDoctorInput_1 = require("../inputs/PatientCreateWithoutDoctorInput");
const PatientScalarWhereInput_1 = require("../inputs/PatientScalarWhereInput");
const PatientUpdateManyWithWhereWithoutDoctorInput_1 = require("../inputs/PatientUpdateManyWithWhereWithoutDoctorInput");
const PatientUpdateWithWhereUniqueWithoutDoctorInput_1 = require("../inputs/PatientUpdateWithWhereUniqueWithoutDoctorInput");
const PatientUpsertWithWhereUniqueWithoutDoctorInput_1 = require("../inputs/PatientUpsertWithWhereUniqueWithoutDoctorInput");
const PatientWhereUniqueInput_1 = require("../inputs/PatientWhereUniqueInput");
let PatientUpdateManyWithoutDoctorNestedInput = class PatientUpdateManyWithoutDoctorNestedInput {
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
exports.PatientUpdateManyWithoutDoctorNestedInput = PatientUpdateManyWithoutDoctorNestedInput;
__decorate([
    TypeGraphQL.Field(_type => [PatientCreateWithoutDoctorInput_1.PatientCreateWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutDoctorNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientCreateOrConnectWithoutDoctorInput_1.PatientCreateOrConnectWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutDoctorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientUpsertWithWhereUniqueWithoutDoctorInput_1.PatientUpsertWithWhereUniqueWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutDoctorNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => PatientCreateManyDoctorInputEnvelope_1.PatientCreateManyDoctorInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutDoctorNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientWhereUniqueInput_1.PatientWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutDoctorNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientWhereUniqueInput_1.PatientWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutDoctorNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientWhereUniqueInput_1.PatientWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutDoctorNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientWhereUniqueInput_1.PatientWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutDoctorNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientUpdateWithWhereUniqueWithoutDoctorInput_1.PatientUpdateWithWhereUniqueWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutDoctorNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientUpdateManyWithWhereWithoutDoctorInput_1.PatientUpdateManyWithWhereWithoutDoctorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutDoctorNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PatientScalarWhereInput_1.PatientScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PatientUpdateManyWithoutDoctorNestedInput.prototype, "deleteMany", void 0);
exports.PatientUpdateManyWithoutDoctorNestedInput = PatientUpdateManyWithoutDoctorNestedInput = __decorate([
    TypeGraphQL.InputType("PatientUpdateManyWithoutDoctorNestedInput", {})
], PatientUpdateManyWithoutDoctorNestedInput);
