import { http } from "./http";
import type { Game } from "../types/Games";

export function getAdminGames() {
  return http<Game[]>("/api/admin/games");
}

export function updateAdminGame(id: string, data: Partial<Game>) {
  return http<Game>(`/api/admin/games/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function deleteAdminGame(id: string) {
  return http<void>(`/api/admin/games/${id}`, {
    method: "DELETE",
  });
}
