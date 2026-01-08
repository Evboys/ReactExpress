const authRoutes = require("./routes/auth.routes");

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/games", gamesRoutes);
app.use("/api/consoles", consolesRoutes);
app.use("/api/favorites", favoritesRoutes);

app.get("/", (req, res) => {
    res.send("API en Marche");
});

module.exports = app;
