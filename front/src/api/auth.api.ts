import { http } from "./http";
import type { User } from "../types/User";
import { API_CONFIG } from "../config/api.config";
import { mockUser, mockToken } from "./mocks/auth.mock";

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
    if (API_CONFIG.USE_MOCK) {
        return Promise.resolve({
            user: mockUser,
            token: mockToken
        });
    }
    return http<AuthResponse>("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data)
    });
}

export function login(data: LoginPayload) {
    if (API_CONFIG.USE_MOCK) {
        console.log('🔐 Using MOCK auth');
        return Promise.resolve({
            user: mockUser,
            token: mockToken
        });
    }
    return http<AuthResponse>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data)
    });
}
export function logout() {
    if (API_CONFIG.USE_MOCK) {
        return Promise.resolve(null);
    }
    return http("/api/auth/logout", {
        method: "POST"
    });
}
export function getProfile() {
    if (API_CONFIG.USE_MOCK) {
        return Promise.resolve({ user: mockUser });
    }
    return http<{ user: User }>("/api/auth/me");
}
export function getUserByUsername(username: string) {
    return http<{ user: User; games: import("../types/Games").Game[] }>(`/api/auth/profile/${username}`);
}
