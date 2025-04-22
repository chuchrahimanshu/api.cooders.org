// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";

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
  },
  {
    timestamps: true,
  }
);

// Model Section
const Developer: Model<DeveloperSchemaInterface> = mongoose.model(
  "Developer",
  developerSchema
);
export default Developer;
