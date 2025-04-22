// Import Section
import { asyncHandler } from "../../handlers/index.handlers";
import type { Request, Response } from "express";

// Action End-Points
export const reactionOnPost = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const reactionOnComment = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const reactionOnReply = asyncHandler(
  async (req: Request, res: Response) => {}
);
