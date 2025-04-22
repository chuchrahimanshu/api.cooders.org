// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";

// Schema Section
const reactionTypeSchema: Schema<ReactionTypeSchemaInterface> =
  new mongoose.Schema(
    {
      title: {
        type: String,
        uppercase: true,
        trim: true,
        required: true,
        unique: true,
      },
      isActive: {
        type: Boolean,
        required: true,
        default: true,
      },
      icon: {
        type: String,
        trim: true,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

// Model Section
const ReactionType: Model<ReactionTypeSchemaInterface> = mongoose.model(
  "ReactionType",
  reactionTypeSchema
);
export default ReactionType;
