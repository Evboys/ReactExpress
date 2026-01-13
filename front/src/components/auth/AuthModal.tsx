import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthModal({
    open,
    onClose
}: {
    open: boolean;
    onClose: () => void;
}) {
    const [mode, setMode] = useState<"login" | "register">("login");

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-zinc-800 rounded-xl w-full max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-zinc-400 hover:text-white"
                >
                    X
                </button>

                {mode === "login" ? (
                    <>
                        <LoginForm onSuccess={onClose} />
                        <p className="text-sm text-center mt-4 text-zinc-400">
                            Pas de compte ?{" "}
                            <button
                                className="text-indigo-400 hover:underline"
                                onClick={() => setMode("register")}
                            >
                                S’inscrire
                            </button>
                        </p>
                    </>
                ) : (
                    <>
                        <RegisterForm onSuccess={() => setMode("login")} />
                        <p className="text-sm text-center mt-4 text-zinc-400">
                            Déjà un compte ?{" "}
                            <button
                                className="text-indigo-400 hover:underline"
                                onClick={() => setMode("login")}
                            >
                                Se connecter
                            </button>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
