import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../api/games.api";
import type { Game } from "../types/Games";

export default function GameDetailPage() {
    const { id } = useParams();
    const [game, setGame] = useState<Game | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        getGameById(id)
            .then(setGame)
            .finally(() => setLoading(false));
    }, [id]);

    const consolesLabel = useMemo(() => {
        return game?.consoles.map(c => c.name).join(", ");
    }, [game]);

    if (loading) {
        return <p className="p-6">Chargement...</p>;
    }

    if (!game) {
        return <p className="p-6">Jeu introuvable</p>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            {/* Cover */}
            <img
                src={game.images.cover}
                alt={game.title}
                className="w-full h-[400px] object-cover rounded"
            />

            {/* Infos */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">{game.title}</h1>

                <p className="text-zinc-300">{game.description}</p>

                {/* Genres */}
                <div className="flex gap-2 flex-wrap">
                    {game.genres.map(genre => (
                        <span
                            key={genre}
                            className="px-3 py-1 bg-zinc-700 rounded text-sm"
                        >
                            {genre}
                        </span>
                    ))}
                </div>

                {/* Consoles */}
                <p className="text-sm text-zinc-400">
                    Disponible sur : {consolesLabel}
                </p>
            </div>
        </div>
    );
}
