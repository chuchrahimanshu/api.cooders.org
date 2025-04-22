interface AccountSchemaInterface {
  accounts: {
    id: ObjectId;
    isActive: boolean;
  }[];
  developer: ObjectId;
}

interface DeveloperSchemaInterface extends Document {
  emailAddress: string;
  username: string;
  password: string;
  generateAccessToken(): Promise<string>;
  generateRefreshToken(): Promise<string>;
}

interface TokenSchemaInterface {
  developer: ObjectId;
  refreshToken?: {
    token: string;
    createdAt: date;
  };
  emailVerification?: {
    token: string;
    createdAt: string;
  };
  tfa?: {
    token: string;
    createdAt: string;
  };
  forgetPassword?: {
    token: string;
    createdAt: string;
  };
}
