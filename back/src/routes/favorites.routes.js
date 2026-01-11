import express from "express";
import {
    getFavorites,
    addFavorite,
    removeFavorite
} from "../controllers/favorites.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";


const router = express.Router();

//Routes testées et fonctionnelles
router.get("/", authMiddleware, getFavorites);
router.post("/:gameId", authMiddleware, addFavorite);
router.delete("/:gameId", authMiddleware, removeFavorite);

export default router;
