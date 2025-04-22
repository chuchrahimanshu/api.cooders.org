interface AccountSchemaInterface {
  accounts: {
    id: ObjectId;
    isActive: boolean;
  }[];
  developer: ObjectId;
}

interface DeveloperSchemaInterface {
  email: string;
  username: string;
  password: string;
}

interface TokenSchemaInterface {
  developer: string;
  refreshToken: {
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
