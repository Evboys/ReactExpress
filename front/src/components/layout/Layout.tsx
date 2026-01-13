import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-zinc-900 text-zinc-100">
            <Header />
            <main className="max-w-6xl mx-auto p-6">
                {children}
            </main>
        </div>
    );
}
