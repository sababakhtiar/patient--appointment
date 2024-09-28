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
exports.AppointmentCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateAppointmentArgs_1 = require("./args/AggregateAppointmentArgs");
const CreateManyAndReturnAppointmentArgs_1 = require("./args/CreateManyAndReturnAppointmentArgs");
const CreateManyAppointmentArgs_1 = require("./args/CreateManyAppointmentArgs");
const CreateOneAppointmentArgs_1 = require("./args/CreateOneAppointmentArgs");
const DeleteManyAppointmentArgs_1 = require("./args/DeleteManyAppointmentArgs");
const DeleteOneAppointmentArgs_1 = require("./args/DeleteOneAppointmentArgs");
const FindFirstAppointmentArgs_1 = require("./args/FindFirstAppointmentArgs");
const FindFirstAppointmentOrThrowArgs_1 = require("./args/FindFirstAppointmentOrThrowArgs");
const FindManyAppointmentArgs_1 = require("./args/FindManyAppointmentArgs");
const FindUniqueAppointmentArgs_1 = require("./args/FindUniqueAppointmentArgs");
const FindUniqueAppointmentOrThrowArgs_1 = require("./args/FindUniqueAppointmentOrThrowArgs");
const GroupByAppointmentArgs_1 = require("./args/GroupByAppointmentArgs");
const UpdateManyAppointmentArgs_1 = require("./args/UpdateManyAppointmentArgs");
const UpdateOneAppointmentArgs_1 = require("./args/UpdateOneAppointmentArgs");
const UpsertOneAppointmentArgs_1 = require("./args/UpsertOneAppointmentArgs");
const helpers_1 = require("../../../helpers");
const Appointment_1 = require("../../../models/Appointment");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAppointment_1 = require("../../outputs/AggregateAppointment");
const AppointmentGroupBy_1 = require("../../outputs/AppointmentGroupBy");
const CreateManyAndReturnAppointment_1 = require("../../outputs/CreateManyAndReturnAppointment");
let AppointmentCrudResolver = class AppointmentCrudResolver {
    async aggregateAppointment(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyAppointment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnAppointment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAppointment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAppointment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAppointment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAppointment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAppointmentOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async appointments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async appointment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getAppointment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAppointment(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAppointment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAppointment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAppointment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).appointment.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.AppointmentCrudResolver = AppointmentCrudResolver;
__decorate([
    TypeGraphQL.Query(_returns => AggregateAppointment_1.AggregateAppointment, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateAppointmentArgs_1.AggregateAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "aggregateAppointment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAppointmentArgs_1.CreateManyAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "createManyAppointment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnAppointment_1.CreateManyAndReturnAppointment], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAndReturnAppointmentArgs_1.CreateManyAndReturnAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "createManyAndReturnAppointment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Appointment_1.Appointment, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneAppointmentArgs_1.CreateOneAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "createOneAppointment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyAppointmentArgs_1.DeleteManyAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "deleteManyAppointment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Appointment_1.Appointment, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneAppointmentArgs_1.DeleteOneAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "deleteOneAppointment", null);
__decorate([
    TypeGraphQL.Query(_returns => Appointment_1.Appointment, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAppointmentArgs_1.FindFirstAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "findFirstAppointment", null);
__decorate([
    TypeGraphQL.Query(_returns => Appointment_1.Appointment, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAppointmentOrThrowArgs_1.FindFirstAppointmentOrThrowArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "findFirstAppointmentOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Appointment_1.Appointment], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyAppointmentArgs_1.FindManyAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "appointments", null);
__decorate([
    TypeGraphQL.Query(_returns => Appointment_1.Appointment, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAppointmentArgs_1.FindUniqueAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "appointment", null);
__decorate([
    TypeGraphQL.Query(_returns => Appointment_1.Appointment, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAppointmentOrThrowArgs_1.FindUniqueAppointmentOrThrowArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "getAppointment", null);
__decorate([
    TypeGraphQL.Query(_returns => [AppointmentGroupBy_1.AppointmentGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByAppointmentArgs_1.GroupByAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "groupByAppointment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyAppointmentArgs_1.UpdateManyAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "updateManyAppointment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Appointment_1.Appointment, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneAppointmentArgs_1.UpdateOneAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "updateOneAppointment", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Appointment_1.Appointment, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneAppointmentArgs_1.UpsertOneAppointmentArgs]),
    __metadata("design:returntype", Promise)
], AppointmentCrudResolver.prototype, "upsertOneAppointment", null);
exports.AppointmentCrudResolver = AppointmentCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Appointment_1.Appointment)
], AppointmentCrudResolver);
