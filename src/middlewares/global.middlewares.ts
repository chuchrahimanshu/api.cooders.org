import type { Request, Response, NextFunction } from "express";
import { APIError } from "../handlers/index.handlers";
import JWT from "jsonwebtoken";
import { Developer, Token } from "../models/index.models";
import {
  cookieOptions,
  JWT_ACCESS_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_SECRET,
} from "../constants/index.constants";

const refreshTokenRotation = async (
  refreshToken: string,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = await Token.findOne({
    "refreshToken.token": refreshToken,
  });
  if (!token) {
    return res
      .clearCookie("accessToken", cookieOptions)
      .clearCookie("refreshToken", cookieOptions)
      .status(401)
      .json(
        new APIError({
          message: "Not Authorized, Please Sign-In",
          status: 401,
        })
      );
  }

  const refreshTokenDetails = await JWT.verify(
    refreshToken,
    JWT_REFRESH_TOKEN_SECRET
  );
  if (!refreshTokenDetails || typeof refreshTokenDetails === "string") {
    return res
      .clearCookie("accessToken", cookieOptions)
      .clearCookie("refreshToken", cookieOptions)
      .status(401)
      .json(
        new APIError({
          message: "Not Authorized, Please Sign-In",
          status: 401,
        })
      );
  }

  const developer = await Developer.findById(refreshTokenDetails._id);
  if (developer) {
    const newAccessToken: string = await developer.generateAccessToken();
    const newRefreshToken: string = await developer.generateRefreshToken();

    token.refreshToken = {
      token: newRefreshToken,
      createdAt: Date.now(),
    };
    await token.save();

    req.developer = developer;
    res
      .cookie("accessToken", newAccessToken, cookieOptions)
      .cookie("refreshToken", newRefreshToken, cookieOptions);

    next();
  }
};

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const typedReq = req as Request;
  try {
    const { accessToken, refreshToken } = req.cookies;
    if (!accessToken && !refreshToken) {
      return res
        .clearCookie("accessToken", cookieOptions)
        .clearCookie("refreshToken", cookieOptions)
        .status(401)
        .json(
          new APIError({
            message: "Not Authorized, Please Sign-In",
            status: 401,
          })
        );
    }

    if (!accessToken && refreshToken) {
      await refreshTokenRotation(refreshToken, req, res, next);
    } else {
      const accessTokenDetails = JWT.verify(
        accessToken,
        JWT_ACCESS_TOKEN_SECRET
      );
      if (
        (!accessTokenDetails || typeof accessTokenDetails === "string") &&
        refreshToken
      ) {
        await refreshTokenRotation(refreshToken, req, res, next);
        return;
      }
      if (!accessTokenDetails || typeof accessTokenDetails === "string") {
        return res.status(401).json(
          new APIError({
            message: "Not Authorized, Invalid Access Token",
            status: 401,
          })
        );
      }

      const developer = await Developer.findById(accessTokenDetails._id);
      if (developer) {
        req.developer = developer;
      }

      next();
    }
  } catch (error) {
    return res.status(500).json(
      new APIError({
        message:
          error instanceof Error
            ? error.message
            : "Account authentication failed!",
        status: 500,
      })
    );
  }
};
