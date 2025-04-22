// Import Section
import { asyncHandler } from "../../handlers/index.handlers";
import type { Request, Response } from "express";

// Action End-Points
export const createComment = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const updateComment = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const deleteComment = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const getComments = asyncHandler(
  async (req: Request, res: Response) => {}
);
