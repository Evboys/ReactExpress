import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-6">
      <h1 className="text-6xl font-bold text-indigo-500">404</h1>

      <p className="text-lg text-zinc-400">Oups… cette page n’existe pas.</p>

      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        <ArrowLeft size={18} />
        Retour à l’accueil
      </button>
    </div>
  );
}
