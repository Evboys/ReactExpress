import authRoutes from "./routes/auth.routes.js";
import gamesRoutes from "./routes/games.routes.js";
import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";


const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/games", gamesRoutes);/*
app.use("/api/consoles", consolesRoutes);
app.use("/api/favorites", favoritesRoutes);*/

app.get("/", (req, res) => {
    res.send("API en Marche");
});

export default app;
