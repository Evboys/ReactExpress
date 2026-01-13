import { http } from "./http";
import type { Console } from "../types/Consoles";

export function getConsoles() {
    return http<Console[]>("/api/consoles");
}