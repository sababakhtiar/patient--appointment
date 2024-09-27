import { MiddlewareFn } from "type-graphql";
import { verifyToken } from "../utils/jwtToken";
import { ContextType } from "../types/types";

export const isAuth: MiddlewareFn<ContextType> = async ({ context }, next) => {
  const authorization = context.req.headers.authorization;

  if (!authorization) {
    throw new Error("Not authenticated.");
  }
  try {
    const token = authorization;
    const user = verifyToken(token);
    context.user = user;
  } catch (err) {
    throw new Error("Invalid token.");
  }
  return next();
};
