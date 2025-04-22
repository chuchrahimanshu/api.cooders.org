// Import Section
import {
  asyncHandler,
  APIError,
  APIResponse,
} from "../../handlers/index.handlers";
import type { Request, Response } from "express";
import { Developer, Token } from "../../models/index.models";
import { cookieOptions } from "../../constants/index.constants";
import bcrypt from "bcryptjs";

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

export const signin = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const developer = await Developer.findOne({ username });
  if (!developer) {
    return res.status(403).json(
      new APIError({
        message: "Invalid Username / Password",
        status: 403,
      })
    );
  }

  const isPasswordValid: boolean = await bcrypt.compare(
    password,
    developer.password
  );
  if (!isPasswordValid) {
    return res.status(403).json(
      new APIError({
        message: "Invalid Username / Password",
        status: 403,
      })
    );
  }

  const accessToken: string = await developer.generateAccessToken();
  const refreshToken: string = await developer.generateRefreshToken();

  const token = await Token.findOne({ developer: developer._id });

  if (token) {
    token.refreshToken = {
      token: refreshToken,
      createdAt: Date.now(),
    };
    await token.save();
  } else {
    await Token.create({
      developer: developer._id,
      refreshToken: {
        token: refreshToken,
        createdAt: Date.now(),
      },
    });
  }

  return res
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .status(200)
    .json(
      new APIResponse({
        message: "Signed In Successfully",
        status: 200,
        data: {
          id: developer._id,
          username: developer.username,
          emailAddress: developer.emailAddress,
        },
      })
    );
});

export const signout = asyncHandler(async (req: Request, res: Response) => {});

export const forgetPassword = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const emailVerification = asyncHandler(
  async (req: Request, res: Response) => {}
);

export const tfa = asyncHandler(async (req: Request, res: Response) => {});
