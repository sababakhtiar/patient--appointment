import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { buildSchema } from "type-graphql";
import { AuthResolver } from "./resolvers/authResolver";
import { DoctorResolver } from "./resolvers/doctorResolver";
import { PatientResolver } from "./resolvers/patientResolver";
import { resolvers as PrismaResolvers } from "../prisma/generated/type-graphql";
import { AppointmentResolver } from "./resolvers/appointmentResolver";
import { FilterResolver } from "./resolvers/filterPatientResolver";
import {AppointmentfetchResolver } from "./resolvers/fetchAppointmentResolver";
import prisma from "./libs/prisma.config"

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      ...PrismaResolvers,
      AuthResolver,
      PatientResolver,
      DoctorResolver,
      AppointmentResolver,
      FilterResolver,
      AppointmentfetchResolver
    ],
  });

  const yoga = createYoga({
    schema,
    context: ({ request }) => {
      return {
        ...request,
        prisma,
      };
    },
  });

  const server = createServer(yoga);

  server.listen(4000, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
}

bootstrap();
