import { useEffect, useState } from "react";
import type { Game } from "../../types/Games";
import { createGame, updateGame } from "../../api/games.api";
import { getConsoles } from "../../api/consoles.api";
import type { Console } from "../../types/Consoles";

export default function GameForm({
  game,
  onClose,
  onSuccess,
}: {
  game: Game | null;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [visibility, setVisibility] = useState<"public" | "unlisted" | "private">("public");
  const [consoles, setConsoles] = useState<string[]>([]);
  const [allConsoles, setAllConsoles] = useState<Console[]>([]);

  useEffect(() => {
    getConsoles().then(setAllConsoles);
  }, []);

  useEffect(() => {
    if (game) {
      setTitle(game.title);
      setDescription(game.description);
      setCover(game.images.cover);
      setVisibility(game.visibility);
      setConsoles(game.consoles.map((c) => c._id));
    }
  }, [game]);

  const toggleConsole = (id: string) => {
    setConsoles((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      consoles,
      visibility,
      images: {
        cover,
        screenshots: [],
      },
    };

    if (game) {
      await updateGame(game._id, payload);
    } else {
      await createGame(payload);
    }

    onSuccess();
  };

  return (
    <div className="bg-zinc-900 p-6 rounded space-y-4">
      <h2 className="font-bold text-lg">
        {game ? "Modifier le jeu" : "Nouveau jeu"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre"
          className="w-full p-2 bg-zinc-800 rounded"
          required
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 bg-zinc-800 rounded"
          required
        />

        <input
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          placeholder="URL de la cover"
          className="w-full p-2 bg-zinc-800 rounded"
          required
        />

        {/* VISIBILITY */}
        <select
          value={visibility}
          onChange={(e) => setVisibility(e.target.value as "public" | "unlisted" | "private")}
          className="w-full p-2 bg-zinc-800 rounded"
        >   
          <option value="public">Public</option>
          <option value="unlisted">Non listé</option>
          <option value="private">Privé</option>
        </select>

        {/* CONSOLES */}
        <div className="grid grid-cols-2 gap-2">
          {allConsoles.map((c) => (
            <label key={c._id} className="flex gap-2 items-center text-sm">
              <input
                type="checkbox"
                checked={consoles.includes(c._id)}
                onChange={() => toggleConsole(c._id)}
              />
              {c.name}
            </label>
          ))}
        </div>

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose}>
            Annuler
          </button>
          <button className="bg-indigo-600 px-4 py-2 rounded">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}
