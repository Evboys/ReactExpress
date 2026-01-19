import authRoutes from "./routes/auth.routes.js";
import gamesRoutes from "./routes/games.routes.js";
import consolesRoutes from "./routes/consoles.routes.js";
import favoritesRoutes from "./routes/favorites.routes.js";
import adminGamesRoutes from "./routes/admin.games.routes.js";
import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";


const app = express();
connectDB();

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/games", gamesRoutes);
app.use("/api/consoles", consolesRoutes);
app.use("/api/favorites", favoritesRoutes);
app.use("/api/admin/games", adminGamesRoutes);

app.get("/api/ping", (req, res) => {
res.json({ status: "ok" });
});

export default app;
