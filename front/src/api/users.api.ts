import type { User } from "../types/User";

const BASE = "https://reactexpress-tnkm.onrender.com/api/users";

// GET ALL
export async function fetchAllUsers(): Promise<User[]> {
    const res = await fetch(BASE);
    if (!res.ok) throw new Error("API error");
    return res.json();
}

// GET ONE
export async function fetchUserByUsername(username: string): Promise<User> {
    const res = await fetch(`${BASE}/${username}`);
    if (!res.ok) throw new Error("API error");
    return res.json();
}
