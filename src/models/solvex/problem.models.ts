// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";
import { ProblemSchemaInterface } from "../../types/index.types";

// Schema Section
const problemSchema: Schema<ProblemSchemaInterface> = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Developer",
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    difficultyLevel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DifficultyLevel",
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    examples: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    constraints: {
      type: String,
      required: true,
    },
    hints: {
      type: String,
      required: true,
    },
    editorial: {
      type: String,
    },
    testcases: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    snippets: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    solutions: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model Section
const Problem: Model<ProblemSchemaInterface> = mongoose.model(
  "Problem",
  problemSchema
);
export default Problem;
