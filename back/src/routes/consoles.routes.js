import express from "express";
import {
    getAllConsoles,
    createConsole,
    updateConsole,
    deleteConsole
} from "../controllers/consoles.controller.js";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getAllConsoles);
//Routes testées et fonctionnelles, utilisable par l'admin uniquement
router.post("/", authMiddleware,isAdmin, createConsole);
router.put("/:id", authMiddleware,isAdmin, updateConsole);
router.delete("/:id", authMiddleware,isAdmin, deleteConsole);

export default router;
