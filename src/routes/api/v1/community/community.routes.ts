// Import Section
import express from "express";
import type { Router } from "express";
import postCommunityRouter from "./post.community.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/posts", postCommunityRouter);

// Export Section
export default router;
