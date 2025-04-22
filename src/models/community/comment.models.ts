// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";

// Schema Section
const commentSchema: Schema<CommentSchemaInterface> = new mongoose.Schema(
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
    repliesEnabled: {
      type: Boolean,
      required: true,
      default: true,
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
const Comment: Model<CommentSchemaInterface> = mongoose.model(
  "Comment",
  commentSchema
);
export default Comment;
