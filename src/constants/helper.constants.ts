import type { CookieOptions } from "express";
import { NODE_ENVIRONMENT } from "./env.constants";

export const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: NODE_ENVIRONMENT === "PRODUCTION",
  sameSite: "strict",
  maxAge: 1000 * 60 * 60 * 24 * 7
};
