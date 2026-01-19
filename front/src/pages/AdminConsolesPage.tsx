import { useEffect, useState, useCallback } from "react";
import { getConsoles, deleteConsole } from "../api/consoles.api";
import type { Console } from "../types/Consoles";
import ConsoleForm from "../components/forms/ConsoleForm";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function AdminConsolesPage() {
    const [consoles, setConsoles] = useState<Console[]>([]);
    const [editing, setEditing] = useState<Console | null>(null);

    const load = useCallback(() => {
        getConsoles().then(setConsoles);
    }, []);

    useEffect(() => {
        load();
    }, [load]);     

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">

            <ConsoleForm console={editing} onSuccess={load} />

            {consoles.map(c => (
                <div
                    key={c._id}
                    className="flex justify-between bg-zinc-800 p-4 rounded"
                >
                    <span>{c.name}</span>

                    <div className="flex gap-3">
                        <button onClick={() => setEditing(c)}>
                            <Pencil size={18} />
                        </button>
                        
                        <button
                            onClick={() => deleteConsole(c._id).then(load)}
                            className="text-red-400"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
