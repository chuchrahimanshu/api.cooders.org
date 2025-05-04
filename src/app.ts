// Import Section
import express from "express";
import type { Express } from "express";
import "./config/nodemailer.config";
import cookieParser from "cookie-parser";

// Configuration Section
const app: Express = express();

// Middleware Section
app.use(express.json());
app.use(cookieParser());

// Export Section
export default app;
