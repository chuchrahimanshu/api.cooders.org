// Import Section
import express from "express";
import type { Router } from "express";
import healthRouter from "./health/health.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/health", healthRouter);

// Export Section
export default router;
