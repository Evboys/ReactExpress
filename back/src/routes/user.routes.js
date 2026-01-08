const express = require("express");
const {
	getAllUsers,
	getUserByUsername
} = require("../controllers/user.controller");

const router = express.Router();

// GET all users
router.get("/", getAllUsers);

// GET user by username
router.get("/:username", getUserByUsername);

module.exports = router;
