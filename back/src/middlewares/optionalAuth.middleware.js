import jwt from "jsonwebtoken";
import RevokedToken from "../models/RevokedTokens.js";

export const optionalAuth = async (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) return next();

    const [, token] = auth.split(" ");

    try {
        const revoked = await RevokedToken.findOne({ token });
        if (revoked) return next();

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch {
        // Token invalide on continue sans user
    }

    next();
};
