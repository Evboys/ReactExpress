import express from "express";
import {
    getAllConsoles,
    createConsole,
    updateConsole,
    deleteConsole
} from "../controllers/consoles.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();
//Routes testées et fonctionnelles
router.get("/", getAllConsoles);
//TODO Routes non testées
router.post("/", authMiddleware, createConsole);
router.put("/:id", authMiddleware, updateConsole);
router.delete("/:id", authMiddleware, deleteConsole);
export default router;
