// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";
import { DifficultyLevelSchemaInterface } from "../../types/index.types";

// Schema Section
const difficultyLevelSchema: Schema<DifficultyLevelSchemaInterface> =
  new mongoose.Schema(
    {
      title: {
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
const DifficultyLevel: Model<DifficultyLevelSchemaInterface> = mongoose.model(
  "DifficultyLevel",
  difficultyLevelSchema
);
export default DifficultyLevel;
