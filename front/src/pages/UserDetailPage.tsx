import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../api/auth.api";
import type { User } from "../types/User";
import type { Game } from "../types/Games";
import GameCard from "../components/GameCard";
import Loader from "../components/ui/Loader";

export default function UserDetailPage() {
    const { username } = useParams();

    const [user, setUser] = useState<User | null>(null);
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!username) return;

        getUserByUsername(username)
            .then(res => {
                setUser(res.user);
                setGames(res.games);
            })
            .finally(() => setLoading(false));
    }, [username]);

    if (loading) return <Loader />;
    if (!user) return <p className="p-6">Utilisateur introuvable</p>;

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            {/* USER INFO */}
            <div className="bg-zinc-800 p-6 rounded">
                <h1 className="text-2xl font-bold">{user.username}</h1>
                <p className="text-zinc-400 text-sm">
                    Membre depuis {new Date(user.createdAt).toLocaleDateString()}
                </p>
            </div>

            {/* GAMES */}
            <div>
                <h2 className="text-xl font-semibold mb-4">
                    Jeux publiés ({games.length})
                </h2>

                {games.length === 0 ? (
                    <p className="text-zinc-400">Aucun jeu publié</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {games.map(game => (
                            <GameCard key={game._id} game={game} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
