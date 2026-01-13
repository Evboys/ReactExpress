type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
    return (
        <input
            type="text"
            placeholder="Rechercher un jeu..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-4 py-3 rounded bg-zinc-800 text-white outline-none"
        />
    );
}
