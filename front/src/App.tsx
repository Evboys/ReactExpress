import { AuthProvider } from "./auth/AuthContext";
import RequireAuth from "./auth/RequireAuth";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import UserDetailPage from "./pages/UserDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import MyGamesPage from "./pages/MyGamesPage";
import AdminConsolesPage from "./pages/AdminConsolesPage";
import AdminGamesPage from "./pages/AdminGamesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ForbiddenPage from "./pages/ForbiddenPage";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games/:id" element={<GameDetailPage />} />
          <Route path="/user/:username" element={<UserDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/403" element={<ForbiddenPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/admin/consoles" element={<RequireAuth role="admin"><AdminConsolesPage /></RequireAuth>} />
          <Route path="/my-games" element={<RequireAuth><MyGamesPage /></RequireAuth>} />
          <Route path="/admin/games" element={<RequireAuth role="admin"><AdminGamesPage /></RequireAuth>} />
        </Routes>
      </Layout>
    </AuthProvider>
  );

export default App;