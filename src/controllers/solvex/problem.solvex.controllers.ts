// Import Section
import {
  asyncHandler,
  APIError,
  APIResponse,
} from "../../handlers/index.handlers";
import type { Request, Response } from "express";

// Action End-Points
export const createProblem = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const getAllProblems = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const getProblem = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const updateProblem = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const deleteProblem = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const getAllSolvedProblems = asyncHandler(
  async (req: Request, res: Response) => {}
);
