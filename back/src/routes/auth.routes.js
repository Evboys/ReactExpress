import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { register, login } from "../controllers/auth.controller.js";
import User from "../models/User.js";

const router = express.Router();

//Routes testées et fonctionnelles
router.post("/register", register);
router.post("/login", login);

router.get("/me", authMiddleware, async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
})

export default router;
