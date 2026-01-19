import { AuthProvider } from "./auth/AuthContext";
import {Routes , Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import UserDetailPage from "./pages/UserDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import MyGamesPage from "./pages/MyGamesPage";
import AdminConsolesPage from "./pages/AdminConsolesPage";

function App() {
    return (
        <AuthProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/games/:id" element={<GameDetailPage />} />
                    <Route path="/user/:username" element={<UserDetailPage />} />
                    <Route path="*" element={<p className="p-6">Page non trouvée</p>} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/admin/consoles" element={<AdminConsolesPage />} />
                    <Route path="/my-games" element={<MyGamesPage />} />        
                </Routes>
            </Layout>
        </AuthProvider>
    );
}

export default App;
