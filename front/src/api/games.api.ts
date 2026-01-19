import { http } from "./http";
import type { Game } from "../types/Games";
import type { GamePayload } from "../types/GamePayload";
import { API_CONFIG } from "../config/api.config";
import { mockGames } from "./mocks/games.mock";

export type GamesQuery = {
  search?: string;
  genre?: string;
  console?: string;
};

export function getGames(query?: GamesQuery) {
  if (API_CONFIG.USE_MOCK) {
    return Promise.resolve(mockGames);
  }

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
export function deleteGame(id: string) {
  return http<void>(`/api/games/${id}`, {
    method: "DELETE",
  });
}
export function createGame(data: GamePayload) {
  return http<Game>("/api/games", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
export function updateGame(id: string, data: GamePayload) {
  return http<Game>(`/api/games/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}
export function getMyGames() {
  if (API_CONFIG.USE_MOCK) {
    return Promise.resolve(mockGames.filter((game) => game.createdBy.username === "admin"));
  }
  return http<Game[]>("/api/games/my");
}
