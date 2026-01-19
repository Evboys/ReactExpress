import { http } from "./http";
import type { Game } from "../types/Games";

export function getFavorites() {
    return http<Game[]>("/api/favorites");
}

export function addFavorite(gameId: string) {
    return http<{ message: string }>(`/api/favorites/${gameId}`, {
        method: "POST"
    });
}

export function removeFavorite(gameId: string) {
    return http<{ message: string }>(`/api/favorites/${gameId}`, {
        method: "DELETE"
    });
}
