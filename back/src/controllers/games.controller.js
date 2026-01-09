import Game from "../models/Game.js";
//Recuperer tous les jeux
export const getAllGames = async (req, res) => {
    const games = await Game.find({ visibility: "public" })
        .populate("consoles")
        .populate("createdBy", "username");

    res.json(games);
};

//Recuperer un jeu par son ID
export const getGameById = async (req, res) => {
    const game = await Game.findById(req.params.id)
        .populate("consoles")
        .populate("createdBy", "username");

    if (!game) {
        return res.status(404).json({ message: "Jeu introuvable" });
    }

    res.json(game);
};
//Recuperer un jeu par son titre
export const searchGames = async (req, res) => {
    const q = req.query.q || "";

    const games = await Game.find({
        title: { $regex: q, $options: "i" }
    });

    res.json(games);
};
//Créer un jeu 
export const createGame = async (req, res) => {
    const game = await Game.create({
        ...req.body,
        createdBy: req.user.id
    });

    res.status(201).json(game);
};

export const updateGame = async (req, res) => {
    const game = await Game.findById(req.params.id);

    if (!game) {
        return res.status(404).json({ message: "Jeu introuvable" });
    }

    if (game.createdBy.toString() !== req.user.id) {
        return res.status(403).json({ message: "Interdit" });
    }

    Object.assign(game, req.body);
    await game.save();

    res.json(game);
};

export const deleteGame = async (req, res) => {
    const game = await Game.findById(req.params.id);

    if (!game) {
        return res.status(404).json({ message: "Jeu introuvable" });
    }

    if (game.createdBy.toString() !== req.user.id) {
        return res.status(403).json({ message: "Interdit" });
    }

    await game.deleteOne();
    res.json({ message: "Jeu supprimé" });
};
