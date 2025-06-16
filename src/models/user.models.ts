// Import SectionAdd commentMore actions
import mongoose, { Schema, Model } from "mongoose";

// Schema Section
const userSchema: Schema<UserSchemaInterface> =
  new mongoose.Schema<UserSchemaInterface>(
    {
      firstName: {
        type: String,
        trim: true,
        required: true,
      },
      lastName: {
        type: String,
        trim: true,
        required: true,
      },
      username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
      },
      email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
      verified: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

// Model Section
const User: Model<UserSchemaInterface> = mongoose.model("User", userSchema);

// Export Section
export { User };
