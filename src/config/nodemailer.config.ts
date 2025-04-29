import nodemailer from "nodemailer";
import {
  NODEMAILER_AUTH_PASS,
  NODEMAILER_AUTH_USER,
  NODEMAILER_HOST,
  NODEMAILER_PORT,
} from "../constants/index.constants";

export const transport = nodemailer.createTransport({
  host: NODEMAILER_HOST,
  port: NODEMAILER_PORT,
  auth: {
    user: NODEMAILER_AUTH_USER,
    pass: NODEMAILER_AUTH_PASS,
  },
});
