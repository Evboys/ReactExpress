import jwt from "jsonwebtoken";

export const optionalAuth = (req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth) return next();

    try {
        const token = auth.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch {
        // Token invalide ou autre erreur, on ignore simplement l'authentification
    }

    next();
};
