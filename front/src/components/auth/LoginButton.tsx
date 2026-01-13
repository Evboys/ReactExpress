import { useState } from "react";
import LoginModal from "./LoginModal";

export default function LoginButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>Login</button>
            {open && <LoginModal onClose={() => setOpen(false)} />}
        </>
    );
}
