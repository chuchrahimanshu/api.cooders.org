import { z } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .regex(/^[A-Za-z\s]+$/, "First name can only contain letters and spaces"),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .regex(/^[A-Za-z\s]+$/, "Last name can only contain letters and spaces"),
  email: z.string().trim().toLowerCase().email("Invalid email address"),
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters")
    .regex(
      /^[a-z0-9_]+$/,
      "Username can only contain lowercase letters, numbers, and underscores"
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password must be at most 64 characters long")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter")
    .regex(/[0-9]/, "Password must include at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must include at least one special character"
    ),
});

export const signinSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const forgotPasswordRequestSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

export const forgotPasswordVerifySchema = z.object({
  username: z.string().min(1, "Username is required"),
  otp: z.string().length(6, "OTP must be 6 digits"),
});

export const emailVerificationRequestSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

export const emailVerificationVerifySchema = z.object({
  username: z.string().min(1, "Username is required"),
  otp: z.string().length(6, "OTP must be 6 digits"),
});

export const tfaRequestSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

export const tfaVerifySchema = z.object({
  username: z.string().min(1, "Username is required"),
  otp: z.string().length(6, "OTP must be 6 digits"),
});
