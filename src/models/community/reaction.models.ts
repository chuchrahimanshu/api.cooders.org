// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";

// Schema Section
const reactionSchema: Schema<ReactionSchemaInterface> = new mongoose.Schema(
  {
    developer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Developer",
      required: true,
    },
    reactionType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ReactionType",
      required: true,
    },
    targetModel: {
      type: String,
      required: true,
      enum: ["Post", "Comment", "Reply"],
    },
    targetId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "targetModel",
    },
  },
  {
    timestamps: true,
  }
);

// Model Section
const Reaction: Model<ReactionSchemaInterface> = mongoose.model(
  "Reaction",
  reactionSchema
);
export default Reaction;
