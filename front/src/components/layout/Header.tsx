import LoginButton from "../auth/loginButton";

export default function Header() {
    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                borderBottom: "1px solid #ddd"
            }}
        >
            <h2>🎮 ReactExpress</h2>
            <LoginButton />
        </header>
    );
}
