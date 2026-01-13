import { createContext, useEffect, useState } from "react";
import {
    fetchProfile,
    loginUser,
    logoutUser,
    getToken
} from "../services/auth.services";
import type { User } from "../types/User";

type AuthContextType = {
    user: User | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = getToken();

        if (!storedToken) {
            setLoading(false);
            return;
        }

        setToken(storedToken);

        fetchProfile()
            .then(setUser)
            .catch(handleLogout)
            .finally(() => setLoading(false));
    }, []);

    const handleLogin = async (email: string, password: string) => {
        const res = await loginUser(email, password);
        setUser(res.user);
        setToken(res.token);
    };

    const handleLogout = () => {
        logoutUser();
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login: handleLogin,
                logout: handleLogout,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
