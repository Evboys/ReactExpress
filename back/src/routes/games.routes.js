import express from "express";
import {
    getAllGames,
    getGameById,
    searchGames,
    createGame,
    updateGame,
    deleteGame
} from "../controllers/game.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getAllGames);
router.get("/search", searchGames);
router.get("/:id", getGameById);

router.post("/", authMiddleware, createGame);
router.put("/:id", authMiddleware, updateGame);
router.delete("/:id", authMiddleware, deleteGame);

export default router;
