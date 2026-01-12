import { useEffect } from "react";
import { http } from "../api/http";
import  Login  from "../components/Login";

export default function HomePage() {
    useEffect(() => {
        http("/api/ping")
            .then(data => console.log("API:", data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <Login />
        </div>
    );
}