import { addFavorite, removeFavorite } from "../api/favorite.api";
import { useAuth } from "../auth/useAuth";
import type { Game } from "../types/Games";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

export default function GameCard({ game }: { game: Game }) {
  const navigate = useNavigate();
  const { user, favorites, setFavorites } = useAuth();
  const isFavorite = favorites.includes(game._id);

  const toggleFavorite = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) return;

    if (isFavorite) {
      await removeFavorite(game._id);
      setFavorites(favorites.filter((id) => id !== game._id));
    } else {
      await addFavorite(game._id);
      setFavorites([...favorites, game._id]);
    }
  };
  return (
    <div
      onClick={() => navigate(`/games/${game._id}`)}
      className="bg-zinc-800 rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition"
    >
      <div className="relative bg-zinc-800 rounded cursor-pointer">
        {user && (
          <button
            onClick={toggleFavorite}
            className="absolute top-2 right-2 z-10"
          >
            <Heart
              size={20}
              className={
                isFavorite ? "fill-red-500 text-red-500" : "text-zinc-400"
              }
            />
          </button>
        )}
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
            {game.consoles.map((c) => c.name).join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}
