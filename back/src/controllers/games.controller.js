import Game from "../models/Game.js";

export const getGames = async (req, res) => {
    try {
        const query = {};

        if (req.query.search) {
            query.title = { $regex: req.query.search, $options: "i" };
        }

        if (req.query.genre) {
            query.genres = req.query.genre;
        }

        if (req.query.console) {
            query.consoles = req.query.console;
        }

        if (!req.user) {

            query.visibility = "public";
        } else if (req.user.role === "admin") {

        } else {

            query.$or = [
                { visibility: "public" },
                { visibility: "unlisted" },
                { createdBy: req.user.id }
            ];
        }

        const games = await Game.find(query)
            .populate("consoles", "name image")
            .populate("createdBy", "username");

        res.json(games);
    } catch (error) {
        console.error("GET GAMES ERROR:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};


export const getGameById = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id)
            .populate("consoles", "name image")
            .populate("createdBy", "username");

        if (!game) {
            return res.status(404).json({ message: "Jeu introuvable" });
        }

        if (
            game.visibility === "private" &&
            (!req.user || game.createdBy._id.toString() !== req.user.id)
        ) {
            return res.status(403).json({ message: "Accès refusé" });
        }

        res.json(game);
    } catch (error) {
        console.error("GET GAME ERROR:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export const createGame = async (req, res) => {
    try {
        const game = await Game.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json(game);
    } catch (error) {
        console.error("CREATE GAME ERROR:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export const updateGame = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);

        if (!game) {
            return res.status(404).json({ message: "Jeu introuvable" });
        }

        if (game.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Non autorisé" });
        }

        Object.assign(game, req.body);
        await game.save();

        res.json(game);
    } catch (error) {
        console.error("UPDATE GAME ERROR:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export const deleteGame = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);

        if (!game) {
            return res.status(404).json({ message: "Jeu introuvable" });
        }

        if (game.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Non autorisé" });
        }

        await game.deleteOne();
        res.json({ message: "Jeu supprimé" });
    } catch (error) {
        console.error("DELETE GAME ERROR:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}
export const getMyGames = async (req, res) => {
    try {
        const games = await Game.find({ createdBy: req.user.id })
            .populate("consoles", "name image")
            .populate("createdBy", "username");
        res.json(games);
    } catch (error) {
        console.error("GET MY GAMES ERROR:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};
export const getAllGamesAdmin = async (req, res) => {
    const games = await Game.find()
        .populate("consoles", "name image")
        .populate("createdBy", "username");

    res.json(games);
};

export const updateAnyGame = async (req, res) => {
    const game = await Game.findById(req.params.id);

    if (!game) {
        return res.status(404).json({ message: "Jeu introuvable" });
    }

    Object.assign(game, req.body);
    await game.save();

    res.json(game);
};

export const deleteAnyGame = async (req, res) => {
    const game = await Game.findById(req.params.id);

    if (!game) {
        return res.status(404).json({ message: "Jeu introuvable" });
    }

    await game.deleteOne();
    res.json({ message: "Jeu supprimé" });
};