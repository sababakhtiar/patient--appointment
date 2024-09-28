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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregatePatientArgs_1 = require("./args/AggregatePatientArgs");
const CreateManyAndReturnPatientArgs_1 = require("./args/CreateManyAndReturnPatientArgs");
const CreateManyPatientArgs_1 = require("./args/CreateManyPatientArgs");
const CreateOnePatientArgs_1 = require("./args/CreateOnePatientArgs");
const DeleteManyPatientArgs_1 = require("./args/DeleteManyPatientArgs");
const DeleteOnePatientArgs_1 = require("./args/DeleteOnePatientArgs");
const FindFirstPatientArgs_1 = require("./args/FindFirstPatientArgs");
const FindFirstPatientOrThrowArgs_1 = require("./args/FindFirstPatientOrThrowArgs");
const FindManyPatientArgs_1 = require("./args/FindManyPatientArgs");
const FindUniquePatientArgs_1 = require("./args/FindUniquePatientArgs");
const FindUniquePatientOrThrowArgs_1 = require("./args/FindUniquePatientOrThrowArgs");
const GroupByPatientArgs_1 = require("./args/GroupByPatientArgs");
const UpdateManyPatientArgs_1 = require("./args/UpdateManyPatientArgs");
const UpdateOnePatientArgs_1 = require("./args/UpdateOnePatientArgs");
const UpsertOnePatientArgs_1 = require("./args/UpsertOnePatientArgs");
const helpers_1 = require("../../../helpers");
const Patient_1 = require("../../../models/Patient");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePatient_1 = require("../../outputs/AggregatePatient");
const CreateManyAndReturnPatient_1 = require("../../outputs/CreateManyAndReturnPatient");
const PatientGroupBy_1 = require("../../outputs/PatientGroupBy");
let PatientCrudResolver = class PatientCrudResolver {
    async aggregatePatient(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyPatient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnPatient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOnePatient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPatient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOnePatient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPatient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPatientOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async patients(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async patient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getPatient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByPatient(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyPatient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOnePatient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOnePatient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).patient.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.PatientCrudResolver = PatientCrudResolver;
__decorate([
    TypeGraphQL.Query(_returns => AggregatePatient_1.AggregatePatient, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregatePatientArgs_1.AggregatePatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "aggregatePatient", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyPatientArgs_1.CreateManyPatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "createManyPatient", null);
__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPatient_1.CreateManyAndReturnPatient], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAndReturnPatientArgs_1.CreateManyAndReturnPatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "createManyAndReturnPatient", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Patient_1.Patient, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOnePatientArgs_1.CreateOnePatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "createOnePatient", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyPatientArgs_1.DeleteManyPatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "deleteManyPatient", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Patient_1.Patient, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOnePatientArgs_1.DeleteOnePatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "deleteOnePatient", null);
__decorate([
    TypeGraphQL.Query(_returns => Patient_1.Patient, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstPatientArgs_1.FindFirstPatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "findFirstPatient", null);
__decorate([
    TypeGraphQL.Query(_returns => Patient_1.Patient, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstPatientOrThrowArgs_1.FindFirstPatientOrThrowArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "findFirstPatientOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Patient_1.Patient], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyPatientArgs_1.FindManyPatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "patients", null);
__decorate([
    TypeGraphQL.Query(_returns => Patient_1.Patient, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniquePatientArgs_1.FindUniquePatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "patient", null);
__decorate([
    TypeGraphQL.Query(_returns => Patient_1.Patient, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniquePatientOrThrowArgs_1.FindUniquePatientOrThrowArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "getPatient", null);
__decorate([
    TypeGraphQL.Query(_returns => [PatientGroupBy_1.PatientGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByPatientArgs_1.GroupByPatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "groupByPatient", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyPatientArgs_1.UpdateManyPatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "updateManyPatient", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Patient_1.Patient, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOnePatientArgs_1.UpdateOnePatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "updateOnePatient", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Patient_1.Patient, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOnePatientArgs_1.UpsertOnePatientArgs]),
    __metadata("design:returntype", Promise)
], PatientCrudResolver.prototype, "upsertOnePatient", null);
exports.PatientCrudResolver = PatientCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Patient_1.Patient)
], PatientCrudResolver);
