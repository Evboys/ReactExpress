import { useState } from "react";
import AuthModal from "./AuthModal";

export default function LoginButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>Login</button>
            {open && <AuthModal onClose={() => setOpen(false)} open={false} />}
        </>
    );
}
