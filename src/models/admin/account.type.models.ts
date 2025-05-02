// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";
import { AccountTypeSchemaInterface } from "../../types/index.types";

// Schema Section
const accountTypeSchema: Schema<AccountTypeSchemaInterface> =
  new mongoose.Schema(
    {
      platform: {
        type: String,
        trim: true,
        uppercase: true,
        required: true,
        unique: true,
      },
      isActive: {
        type: Boolean,
        required: true,
        default: true,
      },
    },
    {
      timestamps: true,
    }
  );

// Model Section
const AccountType: Model<AccountTypeSchemaInterface> = mongoose.model(
  "AccountType",
  accountTypeSchema
);
export default AccountType;
