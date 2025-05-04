// Import Section
import express from "express";
import type { Express } from "express";
import "./config/nodemailer.config";
import cookieParser from "cookie-parser";
import cors from "cors";

// Configuration Section
const app: Express = express();

// Middleware Section
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Export Section
export default app;
