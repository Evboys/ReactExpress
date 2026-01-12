import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(" Erreur useAuth: AuthContext non disponible");
    }
    return context;
}
