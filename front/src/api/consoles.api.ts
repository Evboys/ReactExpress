import { http } from "./http";
import type { Console } from "../types/Consoles";
import { API_CONFIG } from "../config/api.config";
import { mockConsoles } from "./mocks/consoles.mock";

export function getConsoles() {
    if (API_CONFIG.USE_MOCK) {
        return Promise.resolve(mockConsoles);
    }
    return http<Console[]>("/api/consoles");
}
export function deleteConsole(id: string) {
    return http<void>(`/api/consoles/${id}`, {
        method: "DELETE",
    });
}
export function createConsole(data: Partial<Console>) {
    return http<Console>("/api/consoles", {
        method: "POST",
        body: JSON.stringify(data),
    });
}
export function updateConsole(id: string, data: Partial<Console>) {
    return http<Console>(`/api/consoles/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
    });
}