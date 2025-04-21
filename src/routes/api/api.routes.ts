// Import Section
import express from "express";
import type { Router } from "express";
import v1Router from "./v1/v1.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/v1", v1Router);

// Export Section
export default router;
