import type { Console } from "../types/Consoles";

type Props = {
    consoles: Console[];
    selected: string | null;
    onSelect: (id: string) => void;
};

export default function ConsoleFilters({
    consoles,
    selected,
    onSelect
}: Props) {
    return (
        <div className="flex gap-2 flex-wrap">
            {consoles.map((console) => (
                <button
                    key={console._id}
                    onClick={() => onSelect(console._id)}
                    className={`px-3 py-1 rounded text-sm ${selected === console._id
                            ? "bg-indigo-600"
                            : "bg-zinc-700 hover:bg-zinc-600"
                        }`}
                >
                    {console.name}
                </button>
            ))}
        </div>
    );
}
