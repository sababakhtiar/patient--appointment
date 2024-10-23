// import { MiddlewareFn } from "type-graphql";
// import {  verifyAccessToken } from "../utils/jwtToken";
// import { ContextType } from "../types/types";

// export const isAuth: MiddlewareFn<ContextType> = async ({ context }, next) => {
//   const authorization = context.req.headers.authorization;

//   if (!authorization) {
//     throw new Error("Not authenticated.");
//   }
//   try {
//     const token = authorization;
//     const user =  verifyAccessToken(token);
//     context.user = user;
//   } catch (err) {
//     throw new Error("Invalid token.");
//   }
//   return next();
// };


import { MiddlewareFn } from "type-graphql";
import { verifyAccessToken, isAccessTokenExpired } from "../utils/jwtToken";
import { ContextType } from "../types/types";
import { GraphQLError } from "graphql";
export const isAuth: MiddlewareFn<ContextType> = async ({ context }, next) => {
  const authorization = context.req.headers.authorization;

  if (!authorization) {
    throw new GraphQLError("Not authenticated.");
  }

  try {
    const token = authorization;
    if (isAccessTokenExpired(token)) {
      throw new GraphQLError("Access token expired.");
    }

    const user = verifyAccessToken(token);
    context.user = user;
  } catch (err) {
    throw new GraphQLError("Invalid or expired token.");
  }
  return next();
};
