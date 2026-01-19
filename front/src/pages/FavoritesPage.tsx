import { useEffect, useState } from "react";
import { getFavorites } from "../api/favorite.api";
import type { Game } from "../types/Games";
import GameCard from "../components/GameCard";
import Loader from "../components/ui/Loader";

export default function FavoritesPage() {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFavorites()
            .then(setGames)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Mes favoris</h1>

            {games.length === 0 ? (
                <p className="text-zinc-400">Aucun jeu en favoris</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {games.map(game => (
                        <GameCard key={game._id} game={game} />
                    ))}
                </div>
            )}
        </div>
    );
}
