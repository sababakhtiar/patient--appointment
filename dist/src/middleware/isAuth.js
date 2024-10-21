"use strict";
// import { MiddlewareFn } from "type-graphql";
// import {  verifyAccessToken } from "../utils/jwtToken";
// import { ContextType } from "../types/types";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const jwtToken_1 = require("../utils/jwtToken");
const isAuth = async ({ context }, next) => {
    const authorization = context.req.headers.authorization;
    if (!authorization) {
        throw new Error("Not authenticated. Authorization header is missing.");
    }
    try {
        // Use the entire authorization header as the token
        const token = authorization.trim();
        if (!token) {
            throw new Error("Token not provided.");
        }
        // Verify the access token
        const user = (0, jwtToken_1.verifyAccessToken)(token);
        context.user = user;
    }
    catch (err) {
        console.error("Authentication error: ", err);
        throw new Error(err.message || "Authentication failed.");
    }
    return next();
};
exports.isAuth = isAuth;
