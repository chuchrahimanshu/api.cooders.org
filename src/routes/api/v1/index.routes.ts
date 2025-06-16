// Import Section
import express, { Router } from "express";
import accountsRouter from "./accounts.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/accounts", accountsRouter);

// Export Section
export default router;
