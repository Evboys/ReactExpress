import { AuthProvider } from "./auth/AuthContext";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <AuthProvider>
            <Layout>
                <HomePage />
            </Layout>
        </AuthProvider>
    );
}

export default App;
