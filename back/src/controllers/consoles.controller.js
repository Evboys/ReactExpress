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
    const consoles = await Console.findById(req.params.id);

    if (!consoles) {
        return res.status(404).json({ message: "Console introuvable" });
    }

    Object.assign(consoles, req.body);
    await consoles.save();

    res.json(consoles);
};

//Supprimer une console
export const deleteConsole = async (req, res) => {
    const consoles = await Console.findById(req.params.id);

    if (!consoles) {
        return res.status(404).json({ message: "Console introuvable" });
    }

    await consoles.deleteOne();
    res.json({ message: "Console supprimée" });
};
