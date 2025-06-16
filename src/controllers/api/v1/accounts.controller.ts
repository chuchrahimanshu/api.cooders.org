import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "src/handlers";

// Controller Actions
export const signup = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const signin = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const signout = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const generateForgetPasswordToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const verifyForgetPasswordToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const changePassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const generateEmailVerificationToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const verifyEmailVerificationToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const generateTFAToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const verifyTFAToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);
