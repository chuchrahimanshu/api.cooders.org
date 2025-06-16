// Import SectionAdd commentMore actions
import mongoose, { Schema, Model } from "mongoose";

// Schema Section
const tokenSchema: Schema<TokenSchemaInterface> =
  new mongoose.Schema<TokenSchemaInterface>(
    {
      refreshToken: {
        token: String,
        expiresAt: Date,
      },
      twoFactorAuthenticationToken: {
        token: String,
        expiresAt: Date,
      },
      emailVerificationToken: {
        token: String,
        expiresAt: Date,
      },
      forgetPasswordToken: {
        token: String,
        expiresAt: Date,
        isTokenVerified: Boolean,
      },
    },
    {
      timestamps: true,
      collection: "tokens",
    }
  );

// Model Section
const Token: Model<TokenSchemaInterface> = mongoose.model("Token", tokenSchema);

// Export Section
export { Token };
