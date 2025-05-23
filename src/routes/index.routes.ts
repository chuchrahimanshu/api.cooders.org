// Import Section
import express from "express";
import type { Router } from "express";
import apiRouter from "./api/api.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/api", apiRouter);

// Export Section
export default router;
