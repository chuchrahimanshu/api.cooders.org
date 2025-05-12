// Import Section
import express from "express";
import type { Router } from "express";
import { DeveloperSchemaInterface } from "../../../types/index.types";
import healthRouter from "./health/health.routes";
import accountRouter from "./account/account.routes";
import communityRouter from "./community/community.routes";
import chatRouter from "./chat/chat.routes";
import solvexRouter from "./solvex/solvex.routes";

// Configuration Section
const router: Router = express.Router();

// Global Express
declare global {
  namespace Express {
    interface Request {
      developer?: DeveloperSchemaInterface;
    }
  }
}

// Middleware Section
router.use("/health", healthRouter);
router.use("/accounts", accountRouter);
router.use("/communities", communityRouter);
router.use("/chats", chatRouter);
router.use("/solvex", solvexRouter);

// Export Section
export default router;
