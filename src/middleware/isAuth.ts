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
import { verifyAccessToken } from "../utils/jwtToken";
import { ContextType } from "../types/types";

export const isAuth: MiddlewareFn<ContextType> = async ({ context }, next) => {
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
    const user = verifyAccessToken(token);
    context.user = user;
  } catch (err:any) {
    console.error("Authentication error: ", err);
    throw new Error(err.message || "Authentication failed.");
  }

  return next();
};
