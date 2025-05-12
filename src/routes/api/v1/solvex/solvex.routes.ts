// Import Section
import express from "express";
import type { Router } from "express";
import problemRouter from "./problem.solvex.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/problems", problemRouter);

// Export Section
export default router;
