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
exports.DoctorCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateDoctorArgs_1 = require("./args/AggregateDoctorArgs");
const CreateManyAndReturnDoctorArgs_1 = require("./args/CreateManyAndReturnDoctorArgs");
const CreateManyDoctorArgs_1 = require("./args/CreateManyDoctorArgs");
const CreateOneDoctorArgs_1 = require("./args/CreateOneDoctorArgs");
const DeleteManyDoctorArgs_1 = require("./args/DeleteManyDoctorArgs");
const DeleteOneDoctorArgs_1 = require("./args/DeleteOneDoctorArgs");
const FindFirstDoctorArgs_1 = require("./args/FindFirstDoctorArgs");
const FindFirstDoctorOrThrowArgs_1 = require("./args/FindFirstDoctorOrThrowArgs");
const FindManyDoctorArgs_1 = require("./args/FindManyDoctorArgs");
const FindUniqueDoctorArgs_1 = require("./args/FindUniqueDoctorArgs");
const FindUniqueDoctorOrThrowArgs_1 = require("./args/FindUniqueDoctorOrThrowArgs");
const GroupByDoctorArgs_1 = require("./args/GroupByDoctorArgs");
const UpdateManyDoctorArgs_1 = require("./args/UpdateManyDoctorArgs");
const UpdateOneDoctorArgs_1 = require("./args/UpdateOneDoctorArgs");
const UpsertOneDoctorArgs_1 = require("./args/UpsertOneDoctorArgs");
const helpers_1 = require("../../../helpers");
const Doctor_1 = require("../../../models/Doctor");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDoctor_1 = require("../../outputs/AggregateDoctor");
const CreateManyAndReturnDoctor_1 = require("../../outputs/CreateManyAndReturnDoctor");
const DoctorGroupBy_1 = require("../../outputs/DoctorGroupBy");
let DoctorCrudResolver = class DoctorCrudResolver {
    async aggregateDoctor(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyDoctor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnDoctor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneDoctor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDoctor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneDoctor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDoctor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDoctorOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async doctors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async doctor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getDoctor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByDoctor(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyDoctor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneDoctor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneDoctor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).doctor.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DoctorCrudResolver = DoctorCrudResolver;
__decorate([
    TypeGraphQL.Query(_returns => AggregateDoctor_1.AggregateDoctor, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateDoctorArgs_1.AggregateDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "aggregateDoctor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyDoctorArgs_1.CreateManyDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "createManyDoctor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnDoctor_1.CreateManyAndReturnDoctor], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAndReturnDoctorArgs_1.CreateManyAndReturnDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "createManyAndReturnDoctor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Doctor_1.Doctor, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneDoctorArgs_1.CreateOneDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "createOneDoctor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyDoctorArgs_1.DeleteManyDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "deleteManyDoctor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Doctor_1.Doctor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneDoctorArgs_1.DeleteOneDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "deleteOneDoctor", null);
__decorate([
    TypeGraphQL.Query(_returns => Doctor_1.Doctor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstDoctorArgs_1.FindFirstDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "findFirstDoctor", null);
__decorate([
    TypeGraphQL.Query(_returns => Doctor_1.Doctor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstDoctorOrThrowArgs_1.FindFirstDoctorOrThrowArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "findFirstDoctorOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Doctor_1.Doctor], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyDoctorArgs_1.FindManyDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "doctors", null);
__decorate([
    TypeGraphQL.Query(_returns => Doctor_1.Doctor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueDoctorArgs_1.FindUniqueDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "doctor", null);
__decorate([
    TypeGraphQL.Query(_returns => Doctor_1.Doctor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueDoctorOrThrowArgs_1.FindUniqueDoctorOrThrowArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "getDoctor", null);
__decorate([
    TypeGraphQL.Query(_returns => [DoctorGroupBy_1.DoctorGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByDoctorArgs_1.GroupByDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "groupByDoctor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyDoctorArgs_1.UpdateManyDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "updateManyDoctor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Doctor_1.Doctor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneDoctorArgs_1.UpdateOneDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "updateOneDoctor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Doctor_1.Doctor, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneDoctorArgs_1.UpsertOneDoctorArgs]),
    __metadata("design:returntype", Promise)
], DoctorCrudResolver.prototype, "upsertOneDoctor", null);
exports.DoctorCrudResolver = DoctorCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Doctor_1.Doctor)
], DoctorCrudResolver);
