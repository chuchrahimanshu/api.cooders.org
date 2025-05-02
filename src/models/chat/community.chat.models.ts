// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";
import { CommunityChatSchemaInterface } from "../../types/index.types";

// Schema Section
const communityChatSchema: Schema<CommunityChatSchemaInterface> =
  new mongoose.Schema(
    {
      developer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Developer",
        required: true,
      },
      content: {
        type: String,
        maxlength: 1500,
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
      isEdited: {
        type: Boolean,
        required: true,
        default: false,
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
      mentions: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Developer",
        },
      ],
    },
    {
      timestamps: true,
    }
  );

// Model Section
const CommunityChat: Model<CommunityChatSchemaInterface> = mongoose.model(
  "CommunityChat",
  communityChatSchema
);
export default CommunityChat;
