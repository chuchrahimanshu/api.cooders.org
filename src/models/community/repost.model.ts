// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";
import { RepostSchemaInterface } from "../../types/index.types";

// Schema Section
const repostSchema: Schema<RepostSchemaInterface> = new mongoose.Schema(
  {
    developer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Developer",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model Section
const Repost: Model<RepostSchemaInterface> = mongoose.model(
  "Repost",
  repostSchema
);
export default Repost;
