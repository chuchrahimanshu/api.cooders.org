export const PORT: number = Number(process.env.PORT || 8080);
export const NODE_ENVIRONMENT: string = process.env.NODE_ENVIRONMENT || "";
export const DEVELOPMENT_URI: string = process.env.DEVELOPMENT_URI || "";
export const PRODUCTION_URI: string = process.env.PRODUCTION_URI || "";
export const MONGODB_URI: string = process.env.MONGODB_URI || "";
export const JWT_ACCESS_TOKEN_SECRET: string =
  process.env.JWT_ACCESS_TOKEN_SECRET || "";
export const JWT_REFRESH_TOKEN_SECRET: string =
  process.env.JWT_REFRESH_TOKEN_SECRET || "";
export const NODEMAILER_HOST: string = process.env.NODEMAILER_HOST || "";
export const NODEMAILER_PORT: number = Number(
  process.env.NODEMAILER_PORT || 2525
);
export const NODEMAILER_AUTH_USER: string =
  process.env.NODEMAILER_AUTH_USER || "";
export const NODEMAILER_AUTH_PASS: string =
  process.env.NODEMAILER_AUTH_PASS || "";
