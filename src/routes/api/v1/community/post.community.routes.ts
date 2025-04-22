// Import Section
import express from "express";
import type { Router } from "express";
import commentCommunityRouter from "./comment.community.routes";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  reactionOnPost,
  updatePost,
} from "../../../../controllers/index.controllers";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/:post_id/comments", commentCommunityRouter);

// Routes Section
router.route("/").post(createPost).get(getAllPosts);
router.route("/:post_id/reactions").get(reactionOnPost);
router.route("/:post_id").get(getPost).patch(updatePost).delete(deletePost);

// Export Section
export default router;
