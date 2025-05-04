import { OTP_VALID_TIME } from "../constants/env.constants";

export const isOTPExpired = (createdAt: Date) => {
  const now = Date.now();
  const createdTime = new Date(createdAt).getTime();
  return now - createdTime > OTP_VALID_TIME;
};
