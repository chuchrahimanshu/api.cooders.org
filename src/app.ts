// Import Section
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

// Configuration Section
const app = express();

// Middleware Section
dotenv.config();
app.use(morgan("dev"));

// Export Section
export default app;
