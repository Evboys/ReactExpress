import { http } from "./http";
import type { Game } from "../types/Games";
import { API_CONFIG } from "../config/api.config";
import { mockFavorites } from "./mocks/favorites.mock";

export function getFavorites() {
    if (API_CONFIG.USE_MOCK) {
        return Promise.resolve(mockFavorites);
    }
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
