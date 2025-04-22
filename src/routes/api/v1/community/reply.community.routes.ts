// Import Section
import express from "express";
import type { Router } from "express";
import {
  createReply,
  deleteReply,
  getReplies,
  reactionOnReply,
  updateReply,
} from "../../../../controllers/index.controllers";

// Configuration Section
const router: Router = express.Router();

// Routes Section
router.route("/").post(createReply).get(getReplies);
router.route("/:reply_id/reactions").get(reactionOnReply);
router.route("/:reply_id").patch(updateReply).delete(deleteReply);

// Export Section
export default router;
