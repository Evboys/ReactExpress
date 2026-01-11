import express from "express";
import {
    getGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame
} from "../controllers/games.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { optionalAuth } from "../middlewares/optionalAuth.middleware.js";

const router = express.Router();

router.get("/", optionalAuth, getGames);
router.get("/:id", optionalAuth, getGameById);

router.post("/", authMiddleware, createGame);
router.put("/:id", authMiddleware, updateGame);
router.delete("/:id", authMiddleware, deleteGame);

export default router;
