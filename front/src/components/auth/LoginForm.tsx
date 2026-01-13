import { useState } from "react";
import { useAuth } from "../../auth/useAuth";

export default function LoginForm({ onSuccess }: { onSuccess: () => void }) {
    const { loginUser } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            setError(null);
            await loginUser(email, password);
            onSuccess();
        } catch (err) {
            setError("Identifiants invalides");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Connexion..." : "Se connecter"}
            </button>
        </div>
    );
}
