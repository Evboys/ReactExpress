import { useAuth } from "../auth/useAuth";

export default function ProfilePage() {
    const { user, loading } = useAuth();

    if (loading) return <p>Chargement...</p>;
    if (!user) return <p>Accès refusé</p>;

    return (
        <div>
            <h1>Profil</h1>
            <p>Username : {user.username}</p>
            <p>Email : {user.email}</p>
        </div>
    );
}
