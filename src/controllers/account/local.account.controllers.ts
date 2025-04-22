// Import Section
import { asyncHandler } from "../../handlers/index.handlers";
import type { Request, Response } from "express";

// Action End-Points
export const signup = asyncHandler(async (req: Request, res: Response) => {});

export const signin = asyncHandler(async (req: Request, res: Response) => {});

export const signout = asyncHandler(async (req: Request, res: Response) => {});

export const forgetPassword = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const emailVerification = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const tfa = asyncHandler(async (req: Request, res: Response) => {});
