import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "Champs manquants" });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ message: "Email invalide" });
        }

        if (!isValidPassword(password)) {
            return res.status(400).json({
                message:
                    "Mot de passe invalide (8 caractères min, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial)"
            });
        }

        const exists = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (exists) {
            return res.status(409).json({ message: "Utilisateur déjà existant" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "Utilisateur créé",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error("REGISTER ERROR:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const isValidPassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Champs manquants" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Identifiants invalides" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Identifiants invalides" });
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET manquant");
        }

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error("LOGIN ERROR:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};
