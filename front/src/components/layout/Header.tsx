import { useState } from "react";
import { useAuth } from "../../auth/useAuth";
import AuthModal from "../auth/AuthModal";
import { useNavigate } from "react-router-dom";
import { Gamepad2, Heart, Server } from "lucide-react";

export default function Header() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 bg-zinc-900 border-b border-zinc-800">
        {/* LOGO */}
        <h1
          className="font-bold text-lg cursor-pointer"
          onClick={() => navigate("/")}
        >
          GameLib
        </h1>

        {user ? (
          <div className="flex items-center gap-6">
            {/* MY GAMES */}
            <button
              onClick={() => navigate("/my-games")}
              className="flex items-center gap-2 text-sm text-zinc-300 hover:text-indigo-400 transition"
            >
              <Gamepad2 size={18} />
              Mes jeux
            </button>

            {/* FAVORITES */}
            <button
              onClick={() => navigate("/favorites")}
              className="flex items-center gap-2 text-sm text-zinc-300 hover:text-red-400 transition"
            >
              <Heart size={18} />
              Favoris
            </button>

            {/* ADMIN ONLY */}
            {user.role === "admin" && (
              <>
                {/* ADMIN GAMES */}
                <button
                  onClick={() => navigate("/admin/games")}
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-indigo-400 transition"
                >
                  <Gamepad2 size={18} />
                  Jeux
                </button>

                {/* ADMIN CONSOLES */}
                <button
                  onClick={() => navigate("/admin/consoles")}
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-indigo-400 transition"
                >
                  <Server size={18} />
                  Consoles
                </button>
              </>
            )}

            {/* USER */}
            <span
              className="border border-white-700 rounded px-2 py-1 text-l cursor-pointer"
              onClick={() => navigate(`/user/${user.username}`)}
            >
              {user.username}
            </span>

            {/* LOGOUT */}
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
