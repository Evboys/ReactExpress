const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// Route test
app.get("/", (req, res) => {
    res.send("API en Marche");
});

module.exports = app;
