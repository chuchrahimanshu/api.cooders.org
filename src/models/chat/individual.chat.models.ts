// Import Section
import mongoose from "mongoose";
import type { Schema, Model } from "mongoose";
import { IndividualChatSchemaInterface } from "../../types/index.types";

// Schema Section
const individualChatSchema: Schema<IndividualChatSchemaInterface> =
  new mongoose.Schema(
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Developer",
        required: true,
      },
      receiver: {
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
      status: {
        type: String,
        required: true,
        enum: ["SENT", "DELIVERED", "READ"],
      },
    },
    {
      timestamps: true,
    }
  );

// Model Section
const IndividualChat: Model<IndividualChatSchemaInterface> = mongoose.model(
  "IndividualChat",
  individualChatSchema
);
export default IndividualChat;
