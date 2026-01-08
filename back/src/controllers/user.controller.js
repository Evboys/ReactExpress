const User = require("../models/User");

// GET /api/users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /api/users/:username
exports.getUserByUsername = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) return res.status(404).json({ error: "User inexistant ou introuvable" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
