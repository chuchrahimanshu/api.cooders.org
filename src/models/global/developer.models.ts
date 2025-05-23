// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";
import JWT from "jsonwebtoken";
import {
  JWT_ACCESS_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_SECRET,
} from "../../constants/index.constants";
import bcrypt from "bcryptjs";
import { DeveloperSchemaInterface } from "../../types/index.types";

// Schema Section
const developerSchema: Schema<DeveloperSchemaInterface> = new mongoose.Schema(
  {
    emailAddress: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    emailVerification: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Schema Hooks
developerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt: string = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Schema Methods
developerSchema.methods.generateAccessToken =
  async function (): Promise<string> {
    return await JWT.sign(
      {
        _id: this._id,
        username: this.username,
      },
      JWT_ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
  };

developerSchema.methods.generateRefreshToken =
  async function (): Promise<string> {
    return await JWT.sign(
      {
        _id: this._id,
      },
      JWT_REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );
  };

// Model Section
const Developer: Model<DeveloperSchemaInterface> =
  mongoose.model<DeveloperSchemaInterface>("Developer", developerSchema);
export default Developer;
