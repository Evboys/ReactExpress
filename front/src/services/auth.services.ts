import { login, register, getProfile } from "../api/auth.api";
import type { User } from "../types/User";

const TOKEN_KEY = "token";

export async function loginUser(email: string, password: string): Promise<{ user: User; token: string }> {
    const res = await login({ email, password });

    localStorage.setItem(TOKEN_KEY, res.token);

    return {
        user: res.user,
        token: res.token
    };
}

export async function fetchProfile(): Promise<User> {
    const res = await getProfile();
    return res.user;
}

export function logout() {
    localStorage.removeItem(TOKEN_KEY);
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}
