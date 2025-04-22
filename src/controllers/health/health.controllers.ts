// Import Section
import { asyncHandler } from "../../handlers/index.handlers";
import type { Request, Response } from "express";

// Action End-Points
export const healthCheck = asyncHandler(
  async (req: Request, res: Response) => {}
);
