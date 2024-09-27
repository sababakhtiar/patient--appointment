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
exports.SlotCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateSlotArgs_1 = require("./args/AggregateSlotArgs");
const CreateManyAndReturnSlotArgs_1 = require("./args/CreateManyAndReturnSlotArgs");
const CreateManySlotArgs_1 = require("./args/CreateManySlotArgs");
const CreateOneSlotArgs_1 = require("./args/CreateOneSlotArgs");
const DeleteManySlotArgs_1 = require("./args/DeleteManySlotArgs");
const DeleteOneSlotArgs_1 = require("./args/DeleteOneSlotArgs");
const FindFirstSlotArgs_1 = require("./args/FindFirstSlotArgs");
const FindFirstSlotOrThrowArgs_1 = require("./args/FindFirstSlotOrThrowArgs");
const FindManySlotArgs_1 = require("./args/FindManySlotArgs");
const FindUniqueSlotArgs_1 = require("./args/FindUniqueSlotArgs");
const FindUniqueSlotOrThrowArgs_1 = require("./args/FindUniqueSlotOrThrowArgs");
const GroupBySlotArgs_1 = require("./args/GroupBySlotArgs");
const UpdateManySlotArgs_1 = require("./args/UpdateManySlotArgs");
const UpdateOneSlotArgs_1 = require("./args/UpdateOneSlotArgs");
const UpsertOneSlotArgs_1 = require("./args/UpsertOneSlotArgs");
const helpers_1 = require("../../../helpers");
const Slot_1 = require("../../../models/Slot");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSlot_1 = require("../../outputs/AggregateSlot");
const CreateManyAndReturnSlot_1 = require("../../outputs/CreateManyAndReturnSlot");
const SlotGroupBy_1 = require("../../outputs/SlotGroupBy");
let SlotCrudResolver = class SlotCrudResolver {
    async aggregateSlot(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnSlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSlotOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async slots(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async slot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getSlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySlot(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).slot.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.SlotCrudResolver = SlotCrudResolver;
__decorate([
    TypeGraphQL.Query(_returns => AggregateSlot_1.AggregateSlot, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSlotArgs_1.AggregateSlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "aggregateSlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManySlotArgs_1.CreateManySlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "createManySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSlot_1.CreateManyAndReturnSlot], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAndReturnSlotArgs_1.CreateManyAndReturnSlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "createManyAndReturnSlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Slot_1.Slot, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneSlotArgs_1.CreateOneSlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "createOneSlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManySlotArgs_1.DeleteManySlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "deleteManySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Slot_1.Slot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneSlotArgs_1.DeleteOneSlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "deleteOneSlot", null);
__decorate([
    TypeGraphQL.Query(_returns => Slot_1.Slot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSlotArgs_1.FindFirstSlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "findFirstSlot", null);
__decorate([
    TypeGraphQL.Query(_returns => Slot_1.Slot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSlotOrThrowArgs_1.FindFirstSlotOrThrowArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "findFirstSlotOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Slot_1.Slot], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManySlotArgs_1.FindManySlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "slots", null);
__decorate([
    TypeGraphQL.Query(_returns => Slot_1.Slot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSlotArgs_1.FindUniqueSlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "slot", null);
__decorate([
    TypeGraphQL.Query(_returns => Slot_1.Slot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSlotOrThrowArgs_1.FindUniqueSlotOrThrowArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "getSlot", null);
__decorate([
    TypeGraphQL.Query(_returns => [SlotGroupBy_1.SlotGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupBySlotArgs_1.GroupBySlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "groupBySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManySlotArgs_1.UpdateManySlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "updateManySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Slot_1.Slot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneSlotArgs_1.UpdateOneSlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "updateOneSlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Slot_1.Slot, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneSlotArgs_1.UpsertOneSlotArgs]),
    __metadata("design:returntype", Promise)
], SlotCrudResolver.prototype, "upsertOneSlot", null);
exports.SlotCrudResolver = SlotCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Slot_1.Slot)
], SlotCrudResolver);
