// Import Section
import express from "express";
import type { Router } from "express";
import {
  emailVerification,
  forgetPassword,
  signin,
  signout,
  signup,
  tfa,
} from "../../../../controllers/index.controllers";

// Configuration Section
const router: Router = express.Router();

// Routes Section
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/signout").get(signout);
router.route("/password/forgot").post(forgetPassword);
router.route("/email/verification").post(emailVerification);
router.route("/tfa").post(tfa);

// Export Section
export default router;
