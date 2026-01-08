import { useUsers } from "../hooks/useUsers";
import { Loader } from "../components/ui/Loader"
import React from "react";

export default function HomePage() {
    const { users, loading, error } = useUsers();

    if (loading) return <Loader/>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.username}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}