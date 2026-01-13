import { useState } from "react";
import { useAuth } from "../../auth/useAuth";
import Loader from "../ui/Loader";

export default function LoginForm({ onSuccess }: { onSuccess: () => void }) {
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);

        try {
            await login(email, password);
            setSuccess("Connexion réussie");

            setTimeout(() => {
                onSuccess();
            }, 800);
        } catch {
            setError("Identifiants invalides");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-center">Connexion</h2>

            {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {success && (
                <p className="text-green-500 text-sm text-center">{success}</p>
            )}

            <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded bg-zinc-700 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Mot de passe"
                className="w-full px-4 py-2 rounded bg-zinc-700 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded font-semibold flex justify-center"
            >
                {loading ? <Loader /> : "Se connecter"}
            </button>
        </form>
    );
}
