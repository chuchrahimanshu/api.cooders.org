// Import Section
import express from "express";
import type { Router } from "express";
import localAccountRouter from "./local.account.routes";
import socialAccountRouter from "./social.account.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/local", localAccountRouter);
router.use("/social", socialAccountRouter);

// Export Section
export default router;
