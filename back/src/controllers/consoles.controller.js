import Console from "../models/Console.js";
//Recuperer tous les consoles
export const getAllConsoles = async (req, res) => {
    const consoles = await Console.find()
    res.json(consoles);
};

//Créer une console par son id 
export const createConsole = async (req, res) => {
    const game = await Console.create({
        ...req.body,
        createdBy: req.user.id
    });

    res.status(201).json(game);
};
//Mettre a jour une console
export const updateConsole = async (req, res) => {
    const game = await Console.findById(req.params.id);

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

//Supprimer une console
export const deleteConsole = async (req, res) => {
    const game = await Console.findById(req.params.id);

    if (!game) {
        return res.status(404).json({ message: "Console introuvable" });
    }

    if (game.createdBy.toString() !== req.user.id) {
        return res.status(403).json({ message: "Interdit" });
    }

    await game.deleteOne();
    res.json({ message: "Console supprimée" });
};
