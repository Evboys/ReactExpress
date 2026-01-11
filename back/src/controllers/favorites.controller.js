import User from "../models/User.js";

export const getFavorites = async (req, res) => {
    const user = await User.findById(req.user.id).populate("favorites");
    res.json(user.favorites);
};

export const addFavorite = async (req, res) => {
    const { gameId } = req.params;

    await User.findByIdAndUpdate(
        req.user.id,
        { $addToSet: { favorites: gameId } }
    );

    res.status(201).json({ message: "Ajouté aux favoris" });
};

export const removeFavorite = async (req, res) => {
    const { gameId } = req.params;

    await User.findByIdAndUpdate(
        req.user.id,
        { $pull: { favorites: gameId } }
    );

    res.json({ message: "Supprimé des favoris" });
};
