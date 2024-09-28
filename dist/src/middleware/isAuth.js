"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const jwtToken_1 = require("../utils/jwtToken");
const isAuth = async ({ context }, next) => {
    const authorization = context.req.headers.authorization;
    if (!authorization) {
        throw new Error("Not authenticated.");
    }
    try {
        const token = authorization;
        const user = (0, jwtToken_1.verifyToken)(token);
        context.user = user;
    }
    catch (err) {
        throw new Error("Invalid token.");
    }
    return next();
};
exports.isAuth = isAuth;
