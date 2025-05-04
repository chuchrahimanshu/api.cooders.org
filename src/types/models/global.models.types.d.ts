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
  emailVerification: boolean;
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
    createdAt: date;
  };
  tfa?: {
    token: string;
    createdAt: date;
  };
  forgetPassword?: {
    token: string;
    createdAt: date;
  };
}
