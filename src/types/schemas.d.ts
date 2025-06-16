interface UserSchemaInterface {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  verified: boolean;
}

interface TokenSchemaInterface {
  user: ObjectId;
  refreshToken: {
    token: string;
    expiresAt: Date;
  };
  twoFactorAuthenticationToken: {
    token: string;
    expiresAt: Date;
  };
  emailVerificationToken: {
    token: string;
    expiresAt: Date;
  };
  forgetPasswordToken: {
    token: string;
    expiresAt: Date;
    isTokenVerified: Boolean;
  };
}
