const BASE = "https://reactexpress-tnkm.onrender.com";
//import User from "../users/UserType"
//Récupérer la liste complète

export type User = {
    username: string;
    password: string;
    email: string;
    createdAt: string;
};

export async function fetchAllUsers(): Promise<User[]> {
    const res = await fetch(`${BASE}/users`);
    if (!res.ok) throw new Error(`API ${res.status}`);
    return await res.json();
}

export async function fetchUserByUsername(
    username: string
): Promise<User> {
    const res = await fetch(`${BASE}/user/${username}`);

    if (!res.ok) {
        throw new Error(`API ${res.status}`);
    }

    return await res.json();
}
export default {
    fetchAllUsers,
    fetchUserByUsername
}