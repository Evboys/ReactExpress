export const addFavorite = async (req, res) => {
    const fav = await Favorite.create({
        user: req.user.id,
        game: req.params.gameId
    });
    res.status(201).json(fav);
};
