import express from "express";
import {
    getAllGamesAdmin,
    updateAnyGame,
    deleteAnyGame
} from "../controllers/games.controller.js";
import { authMiddleware,isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();
router.get("/", authMiddleware, isAdmin, getAllGamesAdmin);
router.put("/:id", authMiddleware, isAdmin, updateAnyGame);
router.delete("/:id", authMiddleware, isAdmin, deleteAnyGame);

export default router;