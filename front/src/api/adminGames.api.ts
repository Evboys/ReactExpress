import { http } from "./http";
import type { Game } from "../types/Games";
import { API_CONFIG } from "../config/api.config";
import { mockGames } from "./mocks/games.mock";

export function getAdminGames() {
  if (API_CONFIG.USE_MOCK) {
    return Promise.resolve(mockGames);
  }
  return http<Game[]>("/api/admin/games");
}

export function updateAdminGame(id: string, data: Partial<Game>) {
  if (API_CONFIG.USE_MOCK) {
    const game = mockGames.find((g) => g._id === id);
    if (game) {
      return Promise.resolve({ ...game, ...data } as Game);
    }
    throw new Error("Game not found");
  }
  return http<Game>(`/api/admin/games/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function deleteAdminGame(id: string) {
  if (API_CONFIG.USE_MOCK) {
    return Promise.resolve(undefined);
  }
  return http<void>(`/api/admin/games/${id}`, {
    method: "DELETE",
  });
}
