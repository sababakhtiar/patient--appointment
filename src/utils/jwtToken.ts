import jwt from "jsonwebtoken";
import { UserPayload } from "../types/types";

export const generateToken = (user: UserPayload): string => {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "7d",
    }
  );
};

export const verifyToken = (token: string): UserPayload => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
};
