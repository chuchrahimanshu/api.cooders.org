// Import Section
import express from "express";
import type { Express } from "express";
import dotenv from "dotenv";
import "./config/nodemailer.config";

// Configuration Section
const app: Express = express();
dotenv.config();

// Export Section
export default app;
