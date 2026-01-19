import { useEffect, useState } from "react";
import { useAuth } from "../auth/useAuth";
import { deleteGame, getMyGames } from "../api/games.api";
import type { Game } from "../types/Games";
import GameForm from "../components/forms/GameForm";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function MyGamesPage() {
  const { user } = useAuth();
  const [games, setGames] = useState<Game[]>([]);
  const [editingGame, setEditingGame] = useState<Game | null>(null);
  const [showForm, setShowForm] = useState(false);

  const loadGames = () => {
    getMyGames().then(setGames);
  };

  useEffect(loadGames, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer ce jeu ?")) return;
    await deleteGame(id);
    loadGames();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mes jeux</h1>

        <button
          onClick={() => {
            setEditingGame(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded"
        >
          <Plus size={18} /> Ajouter
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <GameForm
          game={editingGame}
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false);
            loadGames();
          }}
        />
      )}

      {/* LIST */}
      <div className="space-y-2">
        {games.map((game) => (
          <div
            key={game._id}
            className="flex items-center justify-between bg-zinc-800 p-4 rounded"
          >
            <span>{game.title}</span>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setEditingGame(game);
                  setShowForm(true);
                }}
              >
                <Pencil size={18} />
              </button>

              <button
                onClick={() => handleDelete(game._id)}
                className="text-red-400"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
