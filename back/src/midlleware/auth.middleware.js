import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token manquant" });
    }

    const [type, token] = authHeader.split(" ");

    if (type !== "Bearer" || !token) {
        return res.status(401).json({ message: "Format du token invalide" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // { id, username, iat, exp }
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token invalide ou expiré" });
    }
};
