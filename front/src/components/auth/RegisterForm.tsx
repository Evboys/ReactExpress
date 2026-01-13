import { useState } from "react";
import { registerUser } from "../../services/auth.services";
import Loader from "../ui/Loader";

export default function RegisterForm({
    onSuccess
}: {
    onSuccess: () => void;
}) {
    const [username, setUsername] = useState("");
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
            await registerUser(username, email, password);
            setSuccess("Compte créé avec succès ");

            setTimeout(() => {
                onSuccess();
            }, 1000);
        } catch {
            setError("Erreur lors de l'inscription");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-center">Inscription</h2>

            {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {success && (
                <p className="text-green-500 text-sm text-center">{success}</p>
            )}

            <input
                placeholder="Pseudo"
                className="w-full px-4 py-2 rounded bg-zinc-700"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded bg-zinc-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Mot de passe"
                className="w-full px-4 py-2 rounded bg-zinc-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded font-semibold flex justify-center"
            >
                {loading ? <Loader /> : "Créer un compte"}
            </button>
        </form>
    );
}
