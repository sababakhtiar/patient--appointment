"use strict";
// import { MiddlewareFn } from "type-graphql";
// import {  verifyAccessToken } from "../utils/jwtToken";
// import { ContextType } from "../types/types";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const jwtToken_1 = require("../utils/jwtToken");
const graphql_1 = require("graphql");
const isAuth = async ({ context }, next) => {
    const authorization = context.req.headers.authorization;
    if (!authorization) {
        throw new graphql_1.GraphQLError("Not authenticated.");
    }
    try {
        const token = authorization;
        if ((0, jwtToken_1.isAccessTokenExpired)(token)) {
            throw new graphql_1.GraphQLError("Access token expired.");
        }
        const user = (0, jwtToken_1.verifyAccessToken)(token);
        context.user = user;
    }
    catch (err) {
        throw new graphql_1.GraphQLError("Invalid or expired token.");
    }
    return next();
};
exports.isAuth = isAuth;
