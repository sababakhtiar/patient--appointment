import jwt, { TokenExpiredError } from "jsonwebtoken";
import { UserPayload } from "../types/types";

export const generateAccessToken = (user: UserPayload): string => {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "5h",
    }
  );
};

export const generateRefreshToken = (user: UserPayload): string => {
  return jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET as string, {
    expiresIn: "7d",
  });
};

export const verifyAccessToken = (token: string): UserPayload => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
};

export const verifyRefreshToken = (token: string): UserPayload => {
  return jwt.verify(
    token,
    process.env.JWT_REFRESH_SECRET as string
  ) as UserPayload;
};

export const isAccessTokenExpired = (token: string): boolean => {
  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    return false; 
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return true; 
    }
    throw error; 
  }
};