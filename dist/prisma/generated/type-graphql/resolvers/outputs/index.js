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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMinAggregate = exports.UserMaxAggregate = exports.UserGroupBy = exports.UserCountAggregate = exports.UserCount = exports.SlotMinAggregate = exports.SlotMaxAggregate = exports.SlotGroupBy = exports.SlotCountAggregate = exports.SlotCount = exports.PatientSumAggregate = exports.PatientMinAggregate = exports.PatientMaxAggregate = exports.PatientGroupBy = exports.PatientCountAggregate = exports.PatientCount = exports.PatientAvgAggregate = exports.DoctorMinAggregate = exports.DoctorMaxAggregate = exports.DoctorGroupBy = exports.DoctorCountAggregate = exports.DoctorCount = exports.CreateManyAndReturnUser = exports.CreateManyAndReturnSlot = exports.CreateManyAndReturnPatient = exports.CreateManyAndReturnDoctor = exports.CreateManyAndReturnAppointment = exports.AppointmentMinAggregate = exports.AppointmentMaxAggregate = exports.AppointmentGroupBy = exports.AppointmentCountAggregate = exports.AggregateUser = exports.AggregateSlot = exports.AggregatePatient = exports.AggregateDoctor = exports.AggregateAppointment = exports.AffectedRowsOutput = void 0;
var AffectedRowsOutput_1 = require("./AffectedRowsOutput");
Object.defineProperty(exports, "AffectedRowsOutput", { enumerable: true, get: function () { return AffectedRowsOutput_1.AffectedRowsOutput; } });
var AggregateAppointment_1 = require("./AggregateAppointment");
Object.defineProperty(exports, "AggregateAppointment", { enumerable: true, get: function () { return AggregateAppointment_1.AggregateAppointment; } });
var AggregateDoctor_1 = require("./AggregateDoctor");
Object.defineProperty(exports, "AggregateDoctor", { enumerable: true, get: function () { return AggregateDoctor_1.AggregateDoctor; } });
var AggregatePatient_1 = require("./AggregatePatient");
Object.defineProperty(exports, "AggregatePatient", { enumerable: true, get: function () { return AggregatePatient_1.AggregatePatient; } });
var AggregateSlot_1 = require("./AggregateSlot");
Object.defineProperty(exports, "AggregateSlot", { enumerable: true, get: function () { return AggregateSlot_1.AggregateSlot; } });
var AggregateUser_1 = require("./AggregateUser");
Object.defineProperty(exports, "AggregateUser", { enumerable: true, get: function () { return AggregateUser_1.AggregateUser; } });
var AppointmentCountAggregate_1 = require("./AppointmentCountAggregate");
Object.defineProperty(exports, "AppointmentCountAggregate", { enumerable: true, get: function () { return AppointmentCountAggregate_1.AppointmentCountAggregate; } });
var AppointmentGroupBy_1 = require("./AppointmentGroupBy");
Object.defineProperty(exports, "AppointmentGroupBy", { enumerable: true, get: function () { return AppointmentGroupBy_1.AppointmentGroupBy; } });
var AppointmentMaxAggregate_1 = require("./AppointmentMaxAggregate");
Object.defineProperty(exports, "AppointmentMaxAggregate", { enumerable: true, get: function () { return AppointmentMaxAggregate_1.AppointmentMaxAggregate; } });
var AppointmentMinAggregate_1 = require("./AppointmentMinAggregate");
Object.defineProperty(exports, "AppointmentMinAggregate", { enumerable: true, get: function () { return AppointmentMinAggregate_1.AppointmentMinAggregate; } });
var CreateManyAndReturnAppointment_1 = require("./CreateManyAndReturnAppointment");
Object.defineProperty(exports, "CreateManyAndReturnAppointment", { enumerable: true, get: function () { return CreateManyAndReturnAppointment_1.CreateManyAndReturnAppointment; } });
var CreateManyAndReturnDoctor_1 = require("./CreateManyAndReturnDoctor");
Object.defineProperty(exports, "CreateManyAndReturnDoctor", { enumerable: true, get: function () { return CreateManyAndReturnDoctor_1.CreateManyAndReturnDoctor; } });
var CreateManyAndReturnPatient_1 = require("./CreateManyAndReturnPatient");
Object.defineProperty(exports, "CreateManyAndReturnPatient", { enumerable: true, get: function () { return CreateManyAndReturnPatient_1.CreateManyAndReturnPatient; } });
var CreateManyAndReturnSlot_1 = require("./CreateManyAndReturnSlot");
Object.defineProperty(exports, "CreateManyAndReturnSlot", { enumerable: true, get: function () { return CreateManyAndReturnSlot_1.CreateManyAndReturnSlot; } });
var CreateManyAndReturnUser_1 = require("./CreateManyAndReturnUser");
Object.defineProperty(exports, "CreateManyAndReturnUser", { enumerable: true, get: function () { return CreateManyAndReturnUser_1.CreateManyAndReturnUser; } });
var DoctorCount_1 = require("./DoctorCount");
Object.defineProperty(exports, "DoctorCount", { enumerable: true, get: function () { return DoctorCount_1.DoctorCount; } });
var DoctorCountAggregate_1 = require("./DoctorCountAggregate");
Object.defineProperty(exports, "DoctorCountAggregate", { enumerable: true, get: function () { return DoctorCountAggregate_1.DoctorCountAggregate; } });
var DoctorGroupBy_1 = require("./DoctorGroupBy");
Object.defineProperty(exports, "DoctorGroupBy", { enumerable: true, get: function () { return DoctorGroupBy_1.DoctorGroupBy; } });
var DoctorMaxAggregate_1 = require("./DoctorMaxAggregate");
Object.defineProperty(exports, "DoctorMaxAggregate", { enumerable: true, get: function () { return DoctorMaxAggregate_1.DoctorMaxAggregate; } });
var DoctorMinAggregate_1 = require("./DoctorMinAggregate");
Object.defineProperty(exports, "DoctorMinAggregate", { enumerable: true, get: function () { return DoctorMinAggregate_1.DoctorMinAggregate; } });
var PatientAvgAggregate_1 = require("./PatientAvgAggregate");
Object.defineProperty(exports, "PatientAvgAggregate", { enumerable: true, get: function () { return PatientAvgAggregate_1.PatientAvgAggregate; } });
var PatientCount_1 = require("./PatientCount");
Object.defineProperty(exports, "PatientCount", { enumerable: true, get: function () { return PatientCount_1.PatientCount; } });
var PatientCountAggregate_1 = require("./PatientCountAggregate");
Object.defineProperty(exports, "PatientCountAggregate", { enumerable: true, get: function () { return PatientCountAggregate_1.PatientCountAggregate; } });
var PatientGroupBy_1 = require("./PatientGroupBy");
Object.defineProperty(exports, "PatientGroupBy", { enumerable: true, get: function () { return PatientGroupBy_1.PatientGroupBy; } });
var PatientMaxAggregate_1 = require("./PatientMaxAggregate");
Object.defineProperty(exports, "PatientMaxAggregate", { enumerable: true, get: function () { return PatientMaxAggregate_1.PatientMaxAggregate; } });
var PatientMinAggregate_1 = require("./PatientMinAggregate");
Object.defineProperty(exports, "PatientMinAggregate", { enumerable: true, get: function () { return PatientMinAggregate_1.PatientMinAggregate; } });
var PatientSumAggregate_1 = require("./PatientSumAggregate");
Object.defineProperty(exports, "PatientSumAggregate", { enumerable: true, get: function () { return PatientSumAggregate_1.PatientSumAggregate; } });
var SlotCount_1 = require("./SlotCount");
Object.defineProperty(exports, "SlotCount", { enumerable: true, get: function () { return SlotCount_1.SlotCount; } });
var SlotCountAggregate_1 = require("./SlotCountAggregate");
Object.defineProperty(exports, "SlotCountAggregate", { enumerable: true, get: function () { return SlotCountAggregate_1.SlotCountAggregate; } });
var SlotGroupBy_1 = require("./SlotGroupBy");
Object.defineProperty(exports, "SlotGroupBy", { enumerable: true, get: function () { return SlotGroupBy_1.SlotGroupBy; } });
var SlotMaxAggregate_1 = require("./SlotMaxAggregate");
Object.defineProperty(exports, "SlotMaxAggregate", { enumerable: true, get: function () { return SlotMaxAggregate_1.SlotMaxAggregate; } });
var SlotMinAggregate_1 = require("./SlotMinAggregate");
Object.defineProperty(exports, "SlotMinAggregate", { enumerable: true, get: function () { return SlotMinAggregate_1.SlotMinAggregate; } });
var UserCount_1 = require("./UserCount");
Object.defineProperty(exports, "UserCount", { enumerable: true, get: function () { return UserCount_1.UserCount; } });
var UserCountAggregate_1 = require("./UserCountAggregate");
Object.defineProperty(exports, "UserCountAggregate", { enumerable: true, get: function () { return UserCountAggregate_1.UserCountAggregate; } });
var UserGroupBy_1 = require("./UserGroupBy");
Object.defineProperty(exports, "UserGroupBy", { enumerable: true, get: function () { return UserGroupBy_1.UserGroupBy; } });
var UserMaxAggregate_1 = require("./UserMaxAggregate");
Object.defineProperty(exports, "UserMaxAggregate", { enumerable: true, get: function () { return UserMaxAggregate_1.UserMaxAggregate; } });
var UserMinAggregate_1 = require("./UserMinAggregate");
Object.defineProperty(exports, "UserMinAggregate", { enumerable: true, get: function () { return UserMinAggregate_1.UserMinAggregate; } });
__exportStar(require("./args"), exports);