// Import Section
import { asyncHandler } from "../../handlers/index.handlers";
import type { Request, Response } from "express";

// Action End-Points
export const createPost = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const updatePost = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const deletePost = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const getPost = asyncHandler(async (req: Request, res: Response) => {});

export const getAllPosts = asyncHandler(
  async (req: Request, res: Response) => {}
);
