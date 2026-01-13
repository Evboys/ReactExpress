import { http } from "./http";
import type { User } from "../types/User";

export type RegisterPayload = {
    username: string;
    email: string;
    password: string;
};

export type LoginPayload = {
    email: string;
    password: string;
};

export type AuthResponse = {
    user: User;
    token: string;
};

export function register(data: RegisterPayload) {
    return http<AuthResponse>("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data)
    });
}

export function login(data: LoginPayload) {
    return http<AuthResponse>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data)
    });
}
export function logout() {
    return http("/api/auth/logout", {
        method: "POST"
    });
}
export function getProfile() {
    return http<{ user: User }>("/api/auth/me");
}
