import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main style={{ padding: "1rem" }}>{children}</main>
        </>
    );
}
