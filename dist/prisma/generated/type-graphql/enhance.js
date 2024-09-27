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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
const tslib = __importStar(require("tslib"));
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Doctor: crudResolvers.DoctorCrudResolver,
    Patient: crudResolvers.PatientCrudResolver,
    Appointment: crudResolvers.AppointmentCrudResolver,
    Slot: crudResolvers.SlotCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createManyAndReturnUser: actionResolvers.CreateManyAndReturnUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Doctor: {
        aggregateDoctor: actionResolvers.AggregateDoctorResolver,
        createManyDoctor: actionResolvers.CreateManyDoctorResolver,
        createManyAndReturnDoctor: actionResolvers.CreateManyAndReturnDoctorResolver,
        createOneDoctor: actionResolvers.CreateOneDoctorResolver,
        deleteManyDoctor: actionResolvers.DeleteManyDoctorResolver,
        deleteOneDoctor: actionResolvers.DeleteOneDoctorResolver,
        findFirstDoctor: actionResolvers.FindFirstDoctorResolver,
        findFirstDoctorOrThrow: actionResolvers.FindFirstDoctorOrThrowResolver,
        doctors: actionResolvers.FindManyDoctorResolver,
        doctor: actionResolvers.FindUniqueDoctorResolver,
        getDoctor: actionResolvers.FindUniqueDoctorOrThrowResolver,
        groupByDoctor: actionResolvers.GroupByDoctorResolver,
        updateManyDoctor: actionResolvers.UpdateManyDoctorResolver,
        updateOneDoctor: actionResolvers.UpdateOneDoctorResolver,
        upsertOneDoctor: actionResolvers.UpsertOneDoctorResolver
    },
    Patient: {
        aggregatePatient: actionResolvers.AggregatePatientResolver,
        createManyPatient: actionResolvers.CreateManyPatientResolver,
        createManyAndReturnPatient: actionResolvers.CreateManyAndReturnPatientResolver,
        createOnePatient: actionResolvers.CreateOnePatientResolver,
        deleteManyPatient: actionResolvers.DeleteManyPatientResolver,
        deleteOnePatient: actionResolvers.DeleteOnePatientResolver,
        findFirstPatient: actionResolvers.FindFirstPatientResolver,
        findFirstPatientOrThrow: actionResolvers.FindFirstPatientOrThrowResolver,
        patients: actionResolvers.FindManyPatientResolver,
        patient: actionResolvers.FindUniquePatientResolver,
        getPatient: actionResolvers.FindUniquePatientOrThrowResolver,
        groupByPatient: actionResolvers.GroupByPatientResolver,
        updateManyPatient: actionResolvers.UpdateManyPatientResolver,
        updateOnePatient: actionResolvers.UpdateOnePatientResolver,
        upsertOnePatient: actionResolvers.UpsertOnePatientResolver
    },
    Appointment: {
        aggregateAppointment: actionResolvers.AggregateAppointmentResolver,
        createManyAppointment: actionResolvers.CreateManyAppointmentResolver,
        createManyAndReturnAppointment: actionResolvers.CreateManyAndReturnAppointmentResolver,
        createOneAppointment: actionResolvers.CreateOneAppointmentResolver,
        deleteManyAppointment: actionResolvers.DeleteManyAppointmentResolver,
        deleteOneAppointment: actionResolvers.DeleteOneAppointmentResolver,
        findFirstAppointment: actionResolvers.FindFirstAppointmentResolver,
        findFirstAppointmentOrThrow: actionResolvers.FindFirstAppointmentOrThrowResolver,
        appointments: actionResolvers.FindManyAppointmentResolver,
        appointment: actionResolvers.FindUniqueAppointmentResolver,
        getAppointment: actionResolvers.FindUniqueAppointmentOrThrowResolver,
        groupByAppointment: actionResolvers.GroupByAppointmentResolver,
        updateManyAppointment: actionResolvers.UpdateManyAppointmentResolver,
        updateOneAppointment: actionResolvers.UpdateOneAppointmentResolver,
        upsertOneAppointment: actionResolvers.UpsertOneAppointmentResolver
    },
    Slot: {
        aggregateSlot: actionResolvers.AggregateSlotResolver,
        createManySlot: actionResolvers.CreateManySlotResolver,
        createManyAndReturnSlot: actionResolvers.CreateManyAndReturnSlotResolver,
        createOneSlot: actionResolvers.CreateOneSlotResolver,
        deleteManySlot: actionResolvers.DeleteManySlotResolver,
        deleteOneSlot: actionResolvers.DeleteOneSlotResolver,
        findFirstSlot: actionResolvers.FindFirstSlotResolver,
        findFirstSlotOrThrow: actionResolvers.FindFirstSlotOrThrowResolver,
        slots: actionResolvers.FindManySlotResolver,
        slot: actionResolvers.FindUniqueSlotResolver,
        getSlot: actionResolvers.FindUniqueSlotOrThrowResolver,
        groupBySlot: actionResolvers.GroupBySlotResolver,
        updateManySlot: actionResolvers.UpdateManySlotResolver,
        updateOneSlot: actionResolvers.UpdateOneSlotResolver,
        upsertOneSlot: actionResolvers.UpsertOneSlotResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Doctor: ["aggregateDoctor", "createManyDoctor", "createManyAndReturnDoctor", "createOneDoctor", "deleteManyDoctor", "deleteOneDoctor", "findFirstDoctor", "findFirstDoctorOrThrow", "doctors", "doctor", "getDoctor", "groupByDoctor", "updateManyDoctor", "updateOneDoctor", "upsertOneDoctor"],
    Patient: ["aggregatePatient", "createManyPatient", "createManyAndReturnPatient", "createOnePatient", "deleteManyPatient", "deleteOnePatient", "findFirstPatient", "findFirstPatientOrThrow", "patients", "patient", "getPatient", "groupByPatient", "updateManyPatient", "updateOnePatient", "upsertOnePatient"],
    Appointment: ["aggregateAppointment", "createManyAppointment", "createManyAndReturnAppointment", "createOneAppointment", "deleteManyAppointment", "deleteOneAppointment", "findFirstAppointment", "findFirstAppointmentOrThrow", "appointments", "appointment", "getAppointment", "groupByAppointment", "updateManyAppointment", "updateOneAppointment", "upsertOneAppointment"],
    Slot: ["aggregateSlot", "createManySlot", "createManyAndReturnSlot", "createOneSlot", "deleteManySlot", "deleteOneSlot", "findFirstSlot", "findFirstSlotOrThrow", "slots", "slot", "getSlot", "groupBySlot", "updateManySlot", "updateOneSlot", "upsertOneSlot"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateDoctorArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyDoctorArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnDoctorArgs: ["data", "skipDuplicates"],
    CreateOneDoctorArgs: ["data"],
    DeleteManyDoctorArgs: ["where"],
    DeleteOneDoctorArgs: ["where"],
    FindFirstDoctorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstDoctorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyDoctorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueDoctorArgs: ["where"],
    FindUniqueDoctorOrThrowArgs: ["where"],
    GroupByDoctorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyDoctorArgs: ["data", "where"],
    UpdateOneDoctorArgs: ["data", "where"],
    UpsertOneDoctorArgs: ["where", "create", "update"],
    AggregatePatientArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyPatientArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnPatientArgs: ["data", "skipDuplicates"],
    CreateOnePatientArgs: ["data"],
    DeleteManyPatientArgs: ["where"],
    DeleteOnePatientArgs: ["where"],
    FindFirstPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstPatientOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniquePatientArgs: ["where"],
    FindUniquePatientOrThrowArgs: ["where"],
    GroupByPatientArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyPatientArgs: ["data", "where"],
    UpdateOnePatientArgs: ["data", "where"],
    UpsertOnePatientArgs: ["where", "create", "update"],
    AggregateAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAppointmentArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnAppointmentArgs: ["data", "skipDuplicates"],
    CreateOneAppointmentArgs: ["data"],
    DeleteManyAppointmentArgs: ["where"],
    DeleteOneAppointmentArgs: ["where"],
    FindFirstAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAppointmentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAppointmentArgs: ["where"],
    FindUniqueAppointmentOrThrowArgs: ["where"],
    GroupByAppointmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAppointmentArgs: ["data", "where"],
    UpdateOneAppointmentArgs: ["data", "where"],
    UpsertOneAppointmentArgs: ["where", "create", "update"],
    AggregateSlotArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManySlotArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnSlotArgs: ["data", "skipDuplicates"],
    CreateOneSlotArgs: ["data"],
    DeleteManySlotArgs: ["where"],
    DeleteOneSlotArgs: ["where"],
    FindFirstSlotArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstSlotOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySlotArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueSlotArgs: ["where"],
    FindUniqueSlotOrThrowArgs: ["where"],
    GroupBySlotArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManySlotArgs: ["data", "where"],
    UpdateOneSlotArgs: ["data", "where"],
    UpsertOneSlotArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Doctor: relationResolvers.DoctorRelationsResolver,
    Patient: relationResolvers.PatientRelationsResolver,
    Appointment: relationResolvers.AppointmentRelationsResolver,
    Slot: relationResolvers.SlotRelationsResolver
};
const relationResolversInfo = {
    User: ["doctor", "Patient"],
    Doctor: ["user", "patients", "appointments", "slots"],
    Patient: ["user", "doctor", "appointments"],
    Appointment: ["doctor", "patient", "slot"],
    Slot: ["doctor", "appointments"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt"],
    Doctor: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt"],
    Patient: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId", "doctorId"],
    Appointment: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    Slot: ["id", "doctorId", "time", "isBooked"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
const outputsInfo = {
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateDoctor: ["_count", "_min", "_max"],
    DoctorGroupBy: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregatePatient: ["_count", "_avg", "_sum", "_min", "_max"],
    PatientGroupBy: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId", "doctorId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateAppointment: ["_count", "_min", "_max"],
    AppointmentGroupBy: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateSlot: ["_count", "_min", "_max"],
    SlotGroupBy: ["id", "doctorId", "time", "isBooked", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["doctor", "Patient"],
    UserCountAggregate: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "_all"],
    UserMinAggregate: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt"],
    DoctorCount: ["patients", "appointments", "slots"],
    DoctorCountAggregate: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "_all"],
    DoctorMinAggregate: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt"],
    DoctorMaxAggregate: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt"],
    PatientCount: ["appointments"],
    PatientCountAggregate: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId", "doctorId", "_all"],
    PatientAvgAggregate: ["age"],
    PatientSumAggregate: ["age"],
    PatientMinAggregate: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "photo", "createdAt", "updatedAt", "userId", "doctorId"],
    PatientMaxAggregate: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "photo", "createdAt", "updatedAt", "userId", "doctorId"],
    AppointmentCountAggregate: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "_all"],
    AppointmentMinAggregate: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    AppointmentMaxAggregate: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    SlotCount: ["appointments"],
    SlotCountAggregate: ["id", "doctorId", "time", "isBooked", "_all"],
    SlotMinAggregate: ["id", "doctorId", "time", "isBooked"],
    SlotMaxAggregate: ["id", "doctorId", "time", "isBooked"],
    CreateManyAndReturnUser: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt"],
    CreateManyAndReturnDoctor: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user"],
    CreateManyAndReturnPatient: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId", "doctorId", "user", "doctor"],
    CreateManyAndReturnAppointment: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "doctor", "patient", "slot"],
    CreateManyAndReturnSlot: ["id", "doctorId", "time", "isBooked", "doctor"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "doctor", "Patient"],
    UserOrderByWithRelationInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "doctor", "Patient"],
    UserWhereUniqueInput: ["id", "email", "mobileNo", "AND", "OR", "NOT", "name", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "doctor", "Patient"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt"],
    DoctorWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user", "patients", "appointments", "slots"],
    DoctorOrderByWithRelationInput: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user", "patients", "appointments", "slots"],
    DoctorWhereUniqueInput: ["id", "userId", "AND", "OR", "NOT", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user", "patients", "appointments", "slots"],
    DoctorOrderByWithAggregationInput: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "_count", "_max", "_min"],
    DoctorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt"],
    PatientWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId", "doctorId", "user", "doctor", "appointments"],
    PatientOrderByWithRelationInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId", "doctorId", "user", "doctor", "appointments"],
    PatientWhereUniqueInput: ["id", "email", "userId", "AND", "OR", "NOT", "name", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "doctorId", "user", "doctor", "appointments"],
    PatientOrderByWithAggregationInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId", "doctorId", "_count", "_avg", "_max", "_min", "_sum"],
    PatientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId", "doctorId"],
    AppointmentWhereInput: ["AND", "OR", "NOT", "id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "doctor", "patient", "slot"],
    AppointmentOrderByWithRelationInput: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "doctor", "patient", "slot"],
    AppointmentWhereUniqueInput: ["id", "AND", "OR", "NOT", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "doctor", "patient", "slot"],
    AppointmentOrderByWithAggregationInput: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "_count", "_max", "_min"],
    AppointmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    SlotWhereInput: ["AND", "OR", "NOT", "id", "doctorId", "time", "isBooked", "doctor", "appointments"],
    SlotOrderByWithRelationInput: ["id", "doctorId", "time", "isBooked", "doctor", "appointments"],
    SlotWhereUniqueInput: ["id", "doctorId_time", "AND", "OR", "NOT", "doctorId", "time", "isBooked", "doctor", "appointments"],
    SlotOrderByWithAggregationInput: ["id", "doctorId", "time", "isBooked", "_count", "_max", "_min"],
    SlotScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "doctorId", "time", "isBooked"],
    UserCreateInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "doctor", "Patient"],
    UserUpdateInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "doctor", "Patient"],
    UserCreateManyInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt"],
    DoctorCreateInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user", "patients", "appointments", "slots"],
    DoctorUpdateInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user", "patients", "appointments", "slots"],
    DoctorCreateManyInput: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt"],
    DoctorUpdateManyMutationInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt"],
    PatientCreateInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "user", "doctor", "appointments"],
    PatientUpdateInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "user", "doctor", "appointments"],
    PatientCreateManyInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId", "doctorId"],
    PatientUpdateManyMutationInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt"],
    AppointmentCreateInput: ["id", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "doctor", "patient", "slot"],
    AppointmentUpdateInput: ["id", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "doctor", "patient", "slot"],
    AppointmentCreateManyInput: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    AppointmentUpdateManyMutationInput: ["id", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    SlotCreateInput: ["id", "time", "isBooked", "doctor", "appointments"],
    SlotUpdateInput: ["id", "time", "isBooked", "doctor", "appointments"],
    SlotCreateManyInput: ["id", "doctorId", "time", "isBooked"],
    SlotUpdateManyMutationInput: ["id", "time", "isBooked"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnumUserRoleFilter: ["equals", "in", "notIn", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DoctorListRelationFilter: ["every", "some", "none"],
    PatientListRelationFilter: ["every", "some", "none"],
    SortOrderInput: ["sort", "nulls"],
    DoctorOrderByRelationAggregateInput: ["_count"],
    PatientOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    EnumUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    EnumGenderFilter: ["equals", "in", "notIn", "not"],
    UserRelationFilter: ["is", "isNot"],
    AppointmentListRelationFilter: ["every", "some", "none"],
    SlotListRelationFilter: ["every", "some", "none"],
    AppointmentOrderByRelationAggregateInput: ["_count"],
    SlotOrderByRelationAggregateInput: ["_count"],
    DoctorCountOrderByAggregateInput: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt"],
    DoctorMaxOrderByAggregateInput: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt"],
    DoctorMinOrderByAggregateInput: ["id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt"],
    EnumGenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
    DoctorRelationFilter: ["is", "isNot"],
    PatientCountOrderByAggregateInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId", "doctorId"],
    PatientAvgOrderByAggregateInput: ["age"],
    PatientMaxOrderByAggregateInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "photo", "createdAt", "updatedAt", "userId", "doctorId"],
    PatientMinOrderByAggregateInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "photo", "createdAt", "updatedAt", "userId", "doctorId"],
    PatientSumOrderByAggregateInput: ["age"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    EnumAppointmentStatusFilter: ["equals", "in", "notIn", "not"],
    PatientRelationFilter: ["is", "isNot"],
    SlotNullableRelationFilter: ["is", "isNot"],
    AppointmentCountOrderByAggregateInput: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    AppointmentMaxOrderByAggregateInput: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    AppointmentMinOrderByAggregateInput: ["id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    EnumAppointmentStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    BoolFilter: ["equals", "not"],
    SlotDoctorIdTimeCompoundUniqueInput: ["doctorId", "time"],
    SlotCountOrderByAggregateInput: ["id", "doctorId", "time", "isBooked"],
    SlotMaxOrderByAggregateInput: ["id", "doctorId", "time", "isBooked"],
    SlotMinOrderByAggregateInput: ["id", "doctorId", "time", "isBooked"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    DoctorCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    PatientCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    EnumUserRoleFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    DoctorUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    PatientUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutDoctorInput: ["create", "connectOrCreate", "connect"],
    PatientCreateNestedManyWithoutDoctorInput: ["create", "connectOrCreate", "createMany", "connect"],
    AppointmentCreateNestedManyWithoutDoctorInput: ["create", "connectOrCreate", "createMany", "connect"],
    SlotCreateNestedManyWithoutDoctorInput: ["create", "connectOrCreate", "createMany", "connect"],
    EnumGenderFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    PatientUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AppointmentUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SlotUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    PatientCreateprescriptionsInput: ["set"],
    UserCreateNestedOneWithoutPatientInput: ["create", "connectOrCreate", "connect"],
    DoctorCreateNestedOneWithoutPatientsInput: ["create", "connectOrCreate", "connect"],
    AppointmentCreateNestedManyWithoutPatientInput: ["create", "connectOrCreate", "createMany", "connect"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    PatientUpdateprescriptionsInput: ["set", "push"],
    UserUpdateOneRequiredWithoutPatientNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    DoctorUpdateOneRequiredWithoutPatientsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AppointmentUpdateManyWithoutPatientNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    DoctorCreateNestedOneWithoutAppointmentsInput: ["create", "connectOrCreate", "connect"],
    PatientCreateNestedOneWithoutAppointmentsInput: ["create", "connectOrCreate", "connect"],
    SlotCreateNestedOneWithoutAppointmentsInput: ["create", "connectOrCreate", "connect"],
    EnumAppointmentStatusFieldUpdateOperationsInput: ["set"],
    DoctorUpdateOneRequiredWithoutAppointmentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    PatientUpdateOneRequiredWithoutAppointmentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    SlotUpdateOneWithoutAppointmentsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    DoctorCreateNestedOneWithoutSlotsInput: ["create", "connectOrCreate", "connect"],
    AppointmentCreateNestedManyWithoutSlotInput: ["create", "connectOrCreate", "createMany", "connect"],
    BoolFieldUpdateOperationsInput: ["set"],
    DoctorUpdateOneRequiredWithoutSlotsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AppointmentUpdateManyWithoutSlotNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumUserRoleFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedEnumUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedEnumGenderFilter: ["equals", "in", "notIn", "not"],
    NestedEnumGenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumAppointmentStatusFilter: ["equals", "in", "notIn", "not"],
    NestedEnumAppointmentStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedBoolFilter: ["equals", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    DoctorCreateWithoutUserInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "patients", "appointments", "slots"],
    DoctorCreateOrConnectWithoutUserInput: ["where", "create"],
    DoctorCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    PatientCreateWithoutUserInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "doctor", "appointments"],
    PatientCreateOrConnectWithoutUserInput: ["where", "create"],
    PatientCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    DoctorUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    DoctorUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    DoctorUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    DoctorScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt"],
    PatientUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    PatientUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    PatientUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    PatientScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId", "doctorId"],
    UserCreateWithoutDoctorInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "Patient"],
    UserCreateOrConnectWithoutDoctorInput: ["where", "create"],
    PatientCreateWithoutDoctorInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "user", "appointments"],
    PatientCreateOrConnectWithoutDoctorInput: ["where", "create"],
    PatientCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
    AppointmentCreateWithoutDoctorInput: ["id", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "patient", "slot"],
    AppointmentCreateOrConnectWithoutDoctorInput: ["where", "create"],
    AppointmentCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
    SlotCreateWithoutDoctorInput: ["id", "time", "isBooked", "appointments"],
    SlotCreateOrConnectWithoutDoctorInput: ["where", "create"],
    SlotCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutDoctorInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutDoctorInput: ["where", "data"],
    UserUpdateWithoutDoctorInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "Patient"],
    PatientUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
    PatientUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
    PatientUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
    AppointmentUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
    AppointmentUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
    AppointmentUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
    AppointmentScalarWhereInput: ["AND", "OR", "NOT", "id", "doctorId", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    SlotUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
    SlotUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
    SlotUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
    SlotScalarWhereInput: ["AND", "OR", "NOT", "id", "doctorId", "time", "isBooked"],
    UserCreateWithoutPatientInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "doctor"],
    UserCreateOrConnectWithoutPatientInput: ["where", "create"],
    DoctorCreateWithoutPatientsInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user", "appointments", "slots"],
    DoctorCreateOrConnectWithoutPatientsInput: ["where", "create"],
    AppointmentCreateWithoutPatientInput: ["id", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "doctor", "slot"],
    AppointmentCreateOrConnectWithoutPatientInput: ["where", "create"],
    AppointmentCreateManyPatientInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutPatientInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutPatientInput: ["where", "data"],
    UserUpdateWithoutPatientInput: ["id", "name", "email", "mobileNo", "password", "otp", "otpExpires", "role", "createdAt", "updatedAt", "doctor"],
    DoctorUpsertWithoutPatientsInput: ["update", "create", "where"],
    DoctorUpdateToOneWithWhereWithoutPatientsInput: ["where", "data"],
    DoctorUpdateWithoutPatientsInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user", "appointments", "slots"],
    AppointmentUpsertWithWhereUniqueWithoutPatientInput: ["where", "update", "create"],
    AppointmentUpdateWithWhereUniqueWithoutPatientInput: ["where", "data"],
    AppointmentUpdateManyWithWhereWithoutPatientInput: ["where", "data"],
    DoctorCreateWithoutAppointmentsInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user", "patients", "slots"],
    DoctorCreateOrConnectWithoutAppointmentsInput: ["where", "create"],
    PatientCreateWithoutAppointmentsInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "user", "doctor"],
    PatientCreateOrConnectWithoutAppointmentsInput: ["where", "create"],
    SlotCreateWithoutAppointmentsInput: ["id", "time", "isBooked", "doctor"],
    SlotCreateOrConnectWithoutAppointmentsInput: ["where", "create"],
    DoctorUpsertWithoutAppointmentsInput: ["update", "create", "where"],
    DoctorUpdateToOneWithWhereWithoutAppointmentsInput: ["where", "data"],
    DoctorUpdateWithoutAppointmentsInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user", "patients", "slots"],
    PatientUpsertWithoutAppointmentsInput: ["update", "create", "where"],
    PatientUpdateToOneWithWhereWithoutAppointmentsInput: ["where", "data"],
    PatientUpdateWithoutAppointmentsInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "user", "doctor"],
    SlotUpsertWithoutAppointmentsInput: ["update", "create", "where"],
    SlotUpdateToOneWithWhereWithoutAppointmentsInput: ["where", "data"],
    SlotUpdateWithoutAppointmentsInput: ["id", "time", "isBooked", "doctor"],
    DoctorCreateWithoutSlotsInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user", "patients", "appointments"],
    DoctorCreateOrConnectWithoutSlotsInput: ["where", "create"],
    AppointmentCreateWithoutSlotInput: ["id", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "doctor", "patient"],
    AppointmentCreateOrConnectWithoutSlotInput: ["where", "create"],
    AppointmentCreateManySlotInputEnvelope: ["data", "skipDuplicates"],
    DoctorUpsertWithoutSlotsInput: ["update", "create", "where"],
    DoctorUpdateToOneWithWhereWithoutSlotsInput: ["where", "data"],
    DoctorUpdateWithoutSlotsInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "user", "patients", "appointments"],
    AppointmentUpsertWithWhereUniqueWithoutSlotInput: ["where", "update", "create"],
    AppointmentUpdateWithWhereUniqueWithoutSlotInput: ["where", "data"],
    AppointmentUpdateManyWithWhereWithoutSlotInput: ["where", "data"],
    DoctorCreateManyUserInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt"],
    PatientCreateManyUserInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "doctorId"],
    DoctorUpdateWithoutUserInput: ["id", "name", "email", "profilePhoto", "gender", "createdAt", "updatedAt", "patients", "appointments", "slots"],
    PatientUpdateWithoutUserInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "doctor", "appointments"],
    PatientCreateManyDoctorInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "userId"],
    AppointmentCreateManyDoctorInput: ["id", "patientId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    SlotCreateManyDoctorInput: ["id", "time", "isBooked"],
    PatientUpdateWithoutDoctorInput: ["id", "name", "email", "phoneNumber", "address", "age", "gender", "medicalRecord", "prescriptions", "photo", "createdAt", "updatedAt", "user", "appointments"],
    AppointmentUpdateWithoutDoctorInput: ["id", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "patient", "slot"],
    SlotUpdateWithoutDoctorInput: ["id", "time", "isBooked", "appointments"],
    AppointmentCreateManyPatientInput: ["id", "doctorId", "slotId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    AppointmentUpdateWithoutPatientInput: ["id", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "doctor", "slot"],
    AppointmentCreateManySlotInput: ["id", "doctorId", "patientId", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt"],
    AppointmentUpdateWithoutSlotInput: ["id", "appointmentDate", "appointmentTime", "status", "createdAt", "updatedAt", "doctor", "patient"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
