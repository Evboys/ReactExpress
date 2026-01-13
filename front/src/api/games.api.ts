import { http } from "./http";
import type { Game } from "../types/Games";

export type GamesQuery = {
    search?: string;
    genre?: string;
    console?: string;
};

export function getGames(query?: GamesQuery) {
    const params = new URLSearchParams();

    if (query?.search) params.append("search", query.search);
    if (query?.genre) params.append("genre", query.genre);
    if (query?.console) params.append("console", query.console);

    const qs = params.toString();

    return http<Game[]>(`/api/games${qs ? `?${qs}` : ""}`);
}
export function getGameById(id: string) {
    return http<Game>(`/api/games/${id}`);
}