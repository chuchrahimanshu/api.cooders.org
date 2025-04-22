interface AccountSchemaInterface {
  accounts: {
    id: ObjectId;
    isActive: boolean;
  }[];
  developer: ObjectId;
}

interface DeveloperSchemaInterface {
  emailAddress: string;
  username: string;
  password: string;
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
