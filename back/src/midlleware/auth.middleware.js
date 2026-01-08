const jwt = require("jsonwebtoken");

export const authMiddleware = (req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth) return res.status(401).json({ message: "Token manquant" });

    const token = auth.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        res.status(401).json({ message: "Token invalide ou expiré" });
    }
};
