// Import Section
import express from "express";
import type { Router } from "express";
import healthRouter from "./health/health.routes";
import accountRouter from "./account/account.routes";
import communityRouter from "./community/community.routes";
import chatRouter from "./chat/chat.routes";
import { DeveloperSchemaInterface } from "../../../types/index.types";

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

// Export Section
export default router;
