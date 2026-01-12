export async function http<T>(url: string,options: RequestInit = {}): Promise<T> {
    const token = localStorage.getItem("token");
    const res = await fetch(url, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...(options.headers || {})
        },
        ...options
    });

    if (!res.ok) {
        let errorMessage = "Erreur serveur";

        try {
            const errorData = await res.json();
            errorMessage = errorData.message || errorMessage;
        } catch {
            errorMessage = await res.text();
        }

        throw new Error(errorMessage);
    }

    if (res.status === 204) {
        return null as T;
    }

    return res.json();
}