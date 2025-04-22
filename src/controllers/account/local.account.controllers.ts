// Import Section
import {
  asyncHandler,
  APIError,
  APIResponse,
} from "../../handlers/index.handlers";
import type { Request, Response } from "express";
import { Developer, Token } from "../../models/index.models";
import { cookieOptions } from "../../constants/index.constants";

// Action End-Points
export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { emailAddress, username, password } = req.body;

  const existingDocument = await Developer.findOne({
    $or: [{ emailAddress }, { username }],
  }).lean();

  if (existingDocument) {
    if (existingDocument.emailAddress === emailAddress) {
      return res
        .status(409)
        .json(
          new APIError({ message: "Account already exists!", status: 409 })
        );
    }
    if (existingDocument.username === username) {
      return res
        .status(409)
        .json(
          new APIError({ message: "Username already taken!", status: 409 })
        );
    }
  }

  const developer = await Developer.create({
    emailAddress,
    username,
    password,
  });

  const accessToken: string = await developer.generateAccessToken();
  const refreshToken: string = await developer.generateRefreshToken();

  await Token.create({
    developer: developer._id,
    refreshToken: {
      token: refreshToken,
      createdAt: Date.now(),
    },
  });

  return res
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .status(201)
    .json(
      new APIResponse({
        message: "Account created successfully",
        status: 201,
        data: { username, emailAddress },
      })
    );
});

export const signin = asyncHandler(async (req: Request, res: Response) => {});

export const signout = asyncHandler(async (req: Request, res: Response) => {});

export const forgetPassword = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const emailVerification = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const tfa = asyncHandler(async (req: Request, res: Response) => {});
