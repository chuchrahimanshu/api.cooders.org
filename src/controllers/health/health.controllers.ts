// Import Section
import { APIResponse, asyncHandler } from "../../handlers/index.handlers";
import type { Request, Response } from "express";

// Action End-Points
export const healthCheck = asyncHandler(async (req: Request, res: Response) => {
  return res.status(200).json(
    new APIResponse({
      message: "Backend is up and running successfully!",
      status: 200,
    })
  );
});
