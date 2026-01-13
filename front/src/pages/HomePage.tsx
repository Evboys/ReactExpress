import { useEffect, useState } from "react";
import { getGames } from "../api/games.api";
import { getConsoles } from "../api/consoles.api";
import type { Game } from "../types/Games";
import type { Console } from "../types/Consoles";

import SearchBar from "../components/SearchBar";
import ConsoleFilters from "../components/ConsoleFilter";
import GameCard from "../components/GameCard";

export default function HomePage() {
    const [games, setGames] = useState<Game[]>([]);
    const [consoles, setConsoles] = useState<Console[]>([]);

    const [search, setSearch] = useState("");
    const [selectedConsole, setSelectedConsole] = useState<string | null>(null);

    useEffect(() => {
        getConsoles().then(setConsoles);
    }, []);

    useEffect(() => {
        getGames({
            search,
            console: selectedConsole ?? undefined
        }).then(setGames);
    }, [search, selectedConsole]);

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            {/* Recherche */}
            <SearchBar value={search} onChange={setSearch} />

            {/* Filtres */}
            <ConsoleFilters
                consoles={consoles}
                selected={selectedConsole}
                onSelect={(id) =>
                    setSelectedConsole(prev => (prev === id ? null : id))
                }
            />

            {/* Jeux */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {games.map(game => (
                    <GameCard key={game._id} game={game} />
                ))}
            </div>

            {games.length === 0 && (
                <p className="text-center text-zinc-400">
                    Aucun jeu trouvé
                </p>
            )}
        </div>
    );
}
