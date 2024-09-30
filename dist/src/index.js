"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("reflect-metadata");
const node_http_1 = require("node:http");
const graphql_yoga_1 = require("graphql-yoga");
const type_graphql_1 = require("type-graphql");
const authResolver_1 = require("./resolvers/authResolver");
const doctorResolver_1 = require("./resolvers/doctorResolver");
const patientResolver_1 = require("./resolvers/patientResolver");
const type_graphql_2 = require("../prisma/generated/type-graphql");
const appointmentResolver_1 = require("./resolvers/appointmentResolver");
const filterPatientResolver_1 = require("./resolvers/filterPatientResolver");
const rescheduleAppointment_1 = require("./resolvers/rescheduleAppointment");
const fetchAppointmentResolver_1 = require("./resolvers/fetchAppointmentResolver");
const prisma_config_1 = __importDefault(require("./libs/prisma.config"));
async function bootstrap() {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [
            ...type_graphql_2.resolvers,
            authResolver_1.AuthResolver,
            patientResolver_1.PatientResolver,
            doctorResolver_1.DoctorResolver,
            appointmentResolver_1.AppointmentResolver,
            rescheduleAppointment_1.RescheduleResolver,
            filterPatientResolver_1.FilterResolver,
            fetchAppointmentResolver_1.AppointmentfetchResolver
        ],
    });
    const yoga = (0, graphql_yoga_1.createYoga)({
        schema,
        context: ({ request }) => {
            return {
                ...request,
                prisma: prisma_config_1.default,
            };
        },
    });
    const server = (0, node_http_1.createServer)(yoga);
    server.listen(4000, () => {
        console.log("Server is running on http://localhost:4000/graphql");
    });
}
bootstrap();
