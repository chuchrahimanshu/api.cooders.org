export interface AccountSchemaInterface {
  accounts: {
    id: ObjectId;
    isActive: boolean;
  }[];
  developer: ObjectId;
}

export interface DeveloperSchemaInterface extends Document {
  _id: ObjectId;
  emailAddress: string;
  username: string;
  password: string;
  generateAccessToken(): Promise<string>;
  generateRefreshToken(): Promise<string>;
}

export interface TokenSchemaInterface {
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
