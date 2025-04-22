// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";

// Schema Section
const postSchema: Schema<PostSchemaInterface> = new mongoose.Schema(
  {
    developer: {
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
    tags: [
      {
        type: String,
        lowercase: true,
        trim: true,
        maxlength: 30,
      },
    ],
    mentions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Developer",
      },
    ],
    hidden: {
      type: Boolean,
      required: true,
      default: false,
    },
    pinned: {
      type: Boolean,
      required: true,
      default: false,
    },
    commentsEnabled: {
      type: Boolean,
      required: true,
      default: true,
    },
    repostEnabled: {
      type: Boolean,
      required: true,
      default: true,
    },
    private: {
      type: Boolean,
      required: true,
      default: false,
    },
    isEdited: {
      type: Boolean,
      required: true,
      default: false,
    },
    slug: {
      type: String,
      lowercase: true,
      trim: true,
    },
    referenceLinks: [
      {
        title: {
          type: String,
          trim: true,
        },
        url: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Model Section
const Post: Model<PostSchemaInterface> = mongoose.model("Post", postSchema);
export default Post;
