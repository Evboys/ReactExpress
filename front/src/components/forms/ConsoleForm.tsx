import { useEffect, useState } from "react";
import { createConsole, updateConsole } from "../../api/consoles.api";
import type { Console } from "../../types/Consoles";

interface ConsoleFormProps {
    console: Console | null;
    onSuccess: () => void;
}

export default function ConsoleForm({ console: editing, onSuccess }: ConsoleFormProps) {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editing) {
            setName(editing.name || "");
        } else {
            setName("");
        }
    }, [editing]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (editing) {
                await updateConsole(editing._id, { name });
            } else {
                await createConsole({ name});
            }
            onSuccess();
            setName("");
        } catch (error) {
            console.error(error);
            alert("Erreur lors de l'enregistrement de la console");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 p-4 rounded space-y-4"
        >
            <h2 className="text-xl font-semibold">
                {editing ? "Modifier la console" : "Ajouter une console"}
            </h2>

            <div className="flex flex-col">
                <label htmlFor="name">Nom</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-1 p-2 rounded bg-zinc-800"
                    required
                />
            </div>

            <button
                type="submit"
                className="bg-indigo-600 px-4 py-2 rounded disabled:opacity-50"
                disabled={loading}
            >
                {loading ? "En cours..." : editing ? "Modifier" : "Ajouter"}
            </button>
        </form>
    );
}
