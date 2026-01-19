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

// Configuration CORS avec plusieurs origines autorisées
const allowedOrigins = [
    "http://localhost:3000",           // Dev local
    "http://localhost:4000",            // Dev local alt
    "https://evboys.github.io",         // Production frontend
    process.env.FRONTEND_URL            // Variable d'environnement
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("CORS policy: origin not allowed"));
        }
    },
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
