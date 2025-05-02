// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";
import { TokenSchemaInterface } from "../../types/index.types";

// Schema Section
const tokenSchema: Schema<TokenSchemaInterface> = new mongoose.Schema(
  {
    developer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Token",
      required: true,
      unique: true,
    },
    refreshToken: {
      token: String,
      createdAt: Date,
    },
    emailVerification: {
      token: String,
      createdAt: Date,
    },
    tfa: {
      token: String,
      createdAt: Date,
    },
    forgetPassword: {
      token: String,
      createdAt: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Model Section
const Token: Model<TokenSchemaInterface> = mongoose.model("Token", tokenSchema);
export default Token;
