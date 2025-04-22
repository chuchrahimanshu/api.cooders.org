// Import Section
import express from "express";
import type { Router } from "express";
import replyCommunityRouter from "./reply.community.routes";
import {
  createComment,
  deleteComment,
  getComments,
  reactionOnComment,
  updateComment,
} from "../../../../controllers/index.controllers";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/:comment_id/replies", replyCommunityRouter);

// Routes Section
router.route("/").post(createComment).get(getComments);
router.route("/:comment_id/reactions").get(reactionOnComment);
router.route("/:comment_id").patch(updateComment).delete(deleteComment);

// Export Section
export default router;
