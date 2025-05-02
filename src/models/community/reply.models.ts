// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";
import { ReplySchemaInterface } from "../../types/index.types";

// Schema Section
const replySchema: Schema<ReplySchemaInterface> = new mongoose.Schema(
  {
    developer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Developer",
      required: true,
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: true,
    },
    content: {
      type: String,
      trim: true,
      maxlength: 500,
      required: true,
    },
    attachments: [
      {
        url: String,
        id: String,
      },
    ],
    snippets: [
      {
        type: String,
      },
    ],
    mentions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Developer",
      },
    ],
    pinned: {
      type: Boolean,
      required: true,
      default: false,
    },
    hidden: {
      type: Boolean,
      required: true,
      default: false,
    },
    isEdited: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Model Section
const Reply: Model<ReplySchemaInterface> = mongoose.model("Reply", replySchema);
export default Reply;
