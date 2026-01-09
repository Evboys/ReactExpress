import { useEffect, useState } from "react";
import { fetchAllUsers, fetchUserByUsername } from "../api/users.api";
import type { User } from "../types/User";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllUsers()
      .then(setUsers)
      .catch(err => setError(err.message))
      .finally(() => setLoading(true));
  }, []);

  return { users, loading, error };
}

export function useUser(username: string) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetchUserByUsername(username).then(setUser);
    }, [username]);

    return user;
}
