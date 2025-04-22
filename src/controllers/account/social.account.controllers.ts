// Import Section
import { asyncHandler } from "../../handlers/index.handlers";
import type { Request, Response } from "express";

// Action End-Points
export const google = asyncHandler(async (req: Request, res: Response) => {});

export const googleCallback = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const github = asyncHandler(async (req: Request, res: Response) => {});

export const githubCallback = asyncHandler(
  async (req: Request, res: Response) => {}
);
