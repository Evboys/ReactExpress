import express from "express";
import {
    getAllGames,
    getGameById,
    searchGames,
    createGame,
    updateGame,
    deleteGame
} from "../controllers/games.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();
//Routes testées et fonctionnelles
router.get("/", getAllGames);
///api/games/search?title=[TitreDuJeu]
router.get("/search", searchGames);
//Route fonctionnelles servira pour récupérer les détails d'un jeu pour la page de détails
router.get("/:id", getGameById);
//Route fonctionnelles pour la création, la mise à jour et la suppression de jeux
router.post("/", authMiddleware, createGame);
router.put("/:id", authMiddleware, updateGame);
router.delete("/:id", authMiddleware, deleteGame);

export default router;
