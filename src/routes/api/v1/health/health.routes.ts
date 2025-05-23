// Import Section
import express from "express";
import type { Router } from "express";
import { healthCheck } from "../../../../controllers/index.controllers";

// Configuration Section
const router: Router = express.Router();

// Routes Section
router.route("/").get(healthCheck);

// Export Section
export default router;
