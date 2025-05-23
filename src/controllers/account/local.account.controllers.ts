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
import { isOTPExpired } from "../../utils/index.utils";

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

export const signout = asyncHandler(async (req: Request, res: Response) => {
  const developer = req.developer;
  if (!developer) {
    return res.status(401).json(
      new APIError({
        message: "Unauthorized - Developer not found",
        status: 401,
      })
    );
  }

  const token = await Token.findOne({ developer: developer._id });
  if (!token) {
    return res.status(401).json(
      new APIError({
        message: "Unauthorized Access Detected!",
        status: 401,
      })
    );
  }

  token.refreshToken = {
    token: "",
    createdAt: null,
  };
  await token.save();

  return res
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .status(200)
    .json(
      new APIResponse({
        message: "Successfully Signed-Out",
        status: 200,
      })
    );
});

export const forgetPassword = asyncHandler(
  async (req: Request, res: Response) => {
    const { username, otp, password } = req.body;

    const developer = await Developer.findOne({ username });
    if (!developer) {
      return res.status(401).json(
        new APIError({
          message: "Unauthorized Access - Developer not found!",
          status: 401,
        })
      );
    }

    const token = await Token.findOne({ developer: developer._id });
    if (!token) {
      return res.status(401).json(
        new APIError({
          message: "Unauthorized Access - Token not found!",
          status: 401,
        })
      );
    }

    if (token.forgetPassword?.token?.toString() !== otp?.toString()) {
      return res.status(401).json(
        new APIError({
          message: "Unauthorized Access - Invalid OTP!",
          status: 401,
        })
      );
    }

    if (isOTPExpired(token.forgetPassword?.createdAt)) {
      return res.status(401).json(
        new APIError({
          message: "OTP Expired, Please retry!",
          status: 401,
        })
      );
    }

    developer.password = password;
    await developer.save();

    token.forgetPassword = {
      token: "",
      createdAt: null,
    };
    await token.save();

    return res.status(200).json(
      new APIResponse({
        message: "Password updated successfully!",
        status: 200,
      })
    );
  }
);

export const emailVerification = asyncHandler(
  async (req: Request, res: Response) => {
    const { username, otp } = req.body;

    const developer = await Developer.findOne({ username });
    if (!developer) {
      return res.status(401).json(
        new APIError({
          message: "Unauthorized Access - Developer not found!",
          status: 401,
        })
      );
    }

    const token = await Token.findOne({ developer: developer._id });
    if (!token) {
      return res.status(401).json(
        new APIError({
          message: "Unauthorized Access - Token not found!",
          status: 401,
        })
      );
    }

    if (token.emailVerification?.token?.toString() !== otp?.toString()) {
      return res.status(401).json(
        new APIError({
          message: "Invalid OTP!",
          status: 401,
        })
      );
    }

    if (isOTPExpired(token.emailVerification?.createdAt)) {
      return res.status(401).json(
        new APIError({
          message: "OTP Expired, Please retry!",
          status: 401,
        })
      );
    }

    developer.emailVerification = true;
    await developer.save();

    token.emailVerification = {
      token: "",
      createdAt: null,
    };
    await token.save();

    return res.status(200).json(
      new APIResponse({
        message: "Email verified successfully!",
        status: 200,
      })
    );
  }
);

export const tfa = asyncHandler(async (req: Request, res: Response) => {
  const { username, otp } = req.body;

  const developer = await Developer.findOne({ username });
  if (!developer) {
    return res.status(401).json(
      new APIError({
        message: "Unauthorized Access - Developer not found!",
        status: 401,
      })
    );
  }

  const token = await Token.findOne({ developer: developer._id });
  if (!token) {
    return res.status(401).json(
      new APIError({
        message: "Unauthorized Access - Token not found!",
        status: 401,
      })
    );
  }

  if (token.tfa?.token?.toString() !== otp?.toString()) {
    return res.status(401).json(
      new APIError({
        message: "Invalid OTP!",
        status: 401,
      })
    );
  }

  if (isOTPExpired(token.tfa?.createdAt)) {
    return res.status(401).json(
      new APIError({
        message: "OTP Expired, Please retry!",
        status: 401,
      })
    );
  }

  token.tfa = {
    token: "",
    createdAt: null,
  };
  await token.save();

  return res.status(200).json(
    new APIResponse({
      message: "TFA verified successfully!",
      status: 200,
    })
  );
});
