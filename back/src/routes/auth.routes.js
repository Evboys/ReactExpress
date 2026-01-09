import express from "express";
import { authMiddleware } from "../midlleware/auth.middleware.js";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();


router.post("/register", register);
router.post("/login", login);

router.get("/me", authMiddleware, async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
})

export default router;
