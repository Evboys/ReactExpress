import { useState } from "react";
import { useAuth } from "../../auth/useAuth";
import AuthModal from "../auth/AuthModal";

export default function Header() {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="flex justify-between items-center px-6 py-4 bg-zinc-900 border-b border-zinc-800">
                <h1 className="font-bold text-lg">GameLib</h1>

                {user ? (
                    <div className="flex items-center gap-4">
                        <span>{user.username}</span>
                        <button
                            onClick={logout}
                            className="text-sm text-red-400 hover:underline"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-indigo-600 px-4 py-2 rounded"
                    >
                        Login
                    </button>
                )}
            </header>
            <AuthModal open={open} onClose={() => setOpen(false)} />
        </>
    );
}
