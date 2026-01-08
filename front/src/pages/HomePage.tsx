import { useUsers } from "../hooks/useUsers";

export default function HomePage() {
    const { users, loading, error } = useUsers();

    if (loading) return <p>Loading...</p>;
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
