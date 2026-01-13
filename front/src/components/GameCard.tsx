import type { Game } from "../types/Games";
import { useNavigate } from "react-router-dom";

export default function GameCard({ game }: { game: Game }) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/games/${game._id}`)} className="bg-zinc-800 rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition">
            <img
                src={game.images.cover}
                alt={game.title}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h3 className="font-bold text-lg">{game.title}</h3>

                <p className="text-sm text-zinc-400 line-clamp-2">
                    {game.description}
                </p>

                <div className="mt-2 text-xs text-zinc-500">
                    {game.consoles.map(c => c.name).join(", ")}
                </div>
            </div>
        </div>
    );
}