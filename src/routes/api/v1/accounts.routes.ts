// Import Section
import express, { Router } from "express";
import {
  changePassword,
  generateEmailVerificationToken,
  generateForgetPasswordToken,
  generateTFAToken,
  signin,
  signout,
  signup,
  verifyEmailVerificationToken,
  verifyForgetPasswordToken,
  verifyTFAToken,
} from "src/controllers";

// Configuration Section
const router: Router = express.Router();

// Routes Section
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/signout").get(signout);
router.route("/password/forgot").post(generateForgetPasswordToken);
router.route("/password/forgot/verify").post(verifyForgetPasswordToken);
router.route("/password").patch(changePassword);
router.route("/email/verify").post(generateEmailVerificationToken);
router.route("/email/verify/confirm").post(verifyEmailVerificationToken);
router.route("/tfa").post(generateTFAToken);
router.route("/tfa/verify").post(verifyTFAToken);

// Export Section
export default router;
