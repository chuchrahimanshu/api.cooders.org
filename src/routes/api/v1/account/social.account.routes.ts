// Import Section
import express from "express";
import type { Router } from "express";
import {
  github,
  githubCallback,
  google,
  googleCallback,
} from "../../../../controllers/index.controllers";

// Configuration Section
const router: Router = express.Router();

// Routes Section
router.route("/google").post(google);
router.route("/google/callback").get(googleCallback);
router.route("/github").post(github);
router.route("/github/callback").get(githubCallback);

// Export Section
export default router;
