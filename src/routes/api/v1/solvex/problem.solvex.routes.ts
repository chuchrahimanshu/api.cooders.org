// Import Section
import express from "express";
import type { Router } from "express";
import {
  createProblem,
  deleteProblem,
  getAllProblems,
  getAllSolvedProblems,
  getProblem,
  updateProblem,
} from "../../../../controllers/index.controllers";
import { isAuthenticated } from "../../../../middlewares/index.middlewares";

// Configuration Section
const router: Router = express.Router();

// Routes Section
router
  .route("/")
  .post(isAuthenticated, createProblem)
  .get(isAuthenticated, getAllProblems);
router
  .route("/:problem_id")
  .get(isAuthenticated, getProblem)
  .patch(isAuthenticated, updateProblem)
  .delete(isAuthenticated, deleteProblem);
router.route("/solved").get(isAuthenticated, getAllSolvedProblems);

// Export Section
export default router;
