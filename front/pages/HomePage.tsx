import { fetchUserByUsername, fetchAllUsers } from "../api/users/GetUsers";
import { useEffect } from "react";

export default function HomePage() {
    useEffect(() => {
        fetchUserByUsername("evan")
            .then(user => console.log(user))
            .catch(err => console.error(err));
        fetchAllUsers()
            .then(user => console.log(user))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>HelloWorld</h1>
        </div>
    );
}