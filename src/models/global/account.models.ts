// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";
import { AccountSchemaInterface } from "../../types/index.types";

// Schema Section
const accountSchema: Schema<AccountSchemaInterface> = new mongoose.Schema(
  {
    developer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Developer",
      required: true,
      unique: true,
    },
    accounts: {
      type: [
        {
          id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AccountType",
            required: true,
          },
          isActive: {
            type: Boolean,
            required: true,
            default: true,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Model Section
const Account: Model<AccountSchemaInterface> = mongoose.model(
  "Account",
  accountSchema
);
export default Account;
