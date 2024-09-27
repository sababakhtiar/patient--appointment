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
exports.AppointmentUpdateManyWithoutPatientNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AppointmentCreateManyPatientInputEnvelope_1 = require("../inputs/AppointmentCreateManyPatientInputEnvelope");
const AppointmentCreateOrConnectWithoutPatientInput_1 = require("../inputs/AppointmentCreateOrConnectWithoutPatientInput");
const AppointmentCreateWithoutPatientInput_1 = require("../inputs/AppointmentCreateWithoutPatientInput");
const AppointmentScalarWhereInput_1 = require("../inputs/AppointmentScalarWhereInput");
const AppointmentUpdateManyWithWhereWithoutPatientInput_1 = require("../inputs/AppointmentUpdateManyWithWhereWithoutPatientInput");
const AppointmentUpdateWithWhereUniqueWithoutPatientInput_1 = require("../inputs/AppointmentUpdateWithWhereUniqueWithoutPatientInput");
const AppointmentUpsertWithWhereUniqueWithoutPatientInput_1 = require("../inputs/AppointmentUpsertWithWhereUniqueWithoutPatientInput");
const AppointmentWhereUniqueInput_1 = require("../inputs/AppointmentWhereUniqueInput");
let AppointmentUpdateManyWithoutPatientNestedInput = class AppointmentUpdateManyWithoutPatientNestedInput {
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
exports.AppointmentUpdateManyWithoutPatientNestedInput = AppointmentUpdateManyWithoutPatientNestedInput;
__decorate([
    TypeGraphQL.Field(_type => [AppointmentCreateWithoutPatientInput_1.AppointmentCreateWithoutPatientInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentUpdateManyWithoutPatientNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutPatientInput_1.AppointmentCreateOrConnectWithoutPatientInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentUpdateManyWithoutPatientNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentUpsertWithWhereUniqueWithoutPatientInput_1.AppointmentUpsertWithWhereUniqueWithoutPatientInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentUpdateManyWithoutPatientNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => AppointmentCreateManyPatientInputEnvelope_1.AppointmentCreateManyPatientInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentUpdateManyWithoutPatientNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput_1.AppointmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentUpdateManyWithoutPatientNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput_1.AppointmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentUpdateManyWithoutPatientNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput_1.AppointmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentUpdateManyWithoutPatientNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput_1.AppointmentWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentUpdateManyWithoutPatientNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentUpdateWithWhereUniqueWithoutPatientInput_1.AppointmentUpdateWithWhereUniqueWithoutPatientInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentUpdateManyWithoutPatientNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentUpdateManyWithWhereWithoutPatientInput_1.AppointmentUpdateManyWithWhereWithoutPatientInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentUpdateManyWithoutPatientNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AppointmentScalarWhereInput_1.AppointmentScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AppointmentUpdateManyWithoutPatientNestedInput.prototype, "deleteMany", void 0);
exports.AppointmentUpdateManyWithoutPatientNestedInput = AppointmentUpdateManyWithoutPatientNestedInput = __decorate([
    TypeGraphQL.InputType("AppointmentUpdateManyWithoutPatientNestedInput", {})
], AppointmentUpdateManyWithoutPatientNestedInput);
