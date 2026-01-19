import { useEffect, useState } from "react";
import { getAdminGames, deleteAdminGame } from "../api/adminGames.api";
import type { Game } from "../types/Games";
import GameForm from "../components/forms/GameForm";
import Loader from "../components/ui/Loader";
import { Pencil, Trash2 } from "lucide-react";

export default function AdminGamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [editing, setEditing] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  const load = () =>
    getAdminGames()
      .then(setGames)
      .finally(() => setLoading(false));

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin · Jeux</h1>

      {loading && <Loader />}

      {editing && (
        <GameForm
          game={editing}
          onClose={() => setEditing(null)}
          onSuccess={() => {
            setEditing(null);
            load();
          }}
        />
      )}

      {games.map((game) => (
        <div
          key={game._id}
          className="flex justify-between bg-zinc-800 p-4 rounded"
        >
          <span>{game.title}</span>

          <div className="flex gap-3">
            <img
              src={game.images.cover}
              alt={game.title}
              className="object-cover rounded w-16 h-20"
            />
            <button onClick={() => setEditing(game)}>
              <Pencil size={18} />
            </button>
            <button
              className="text-red-400"
              onClick={() => deleteAdminGame(game._id).then(load)}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
