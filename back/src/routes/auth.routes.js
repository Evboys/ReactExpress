import express from "express";
import { register, login, logout, getProfile, getUserByUsername } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { optionalAuth } from "../middlewares/optionalAuth.middleware.js";
import { registerValidator, loginValidator } from "../validators/auth.validator.js";
import { validate } from "../middlewares/validate.middleware.js";

const router = express.Router();

//Routes testées et fonctionnelles
router.post("/register", registerValidator, validate, register);
router.post("/login", loginValidator, validate, login);
router.post("/logout", authMiddleware, logout);
router.get("/me", authMiddleware, getProfile);
router.get("/profile/:username", optionalAuth, getUserByUsername);

export default router;
