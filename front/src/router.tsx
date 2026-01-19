import { createHashRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import RequireAuth from "./auth/RequireAuth";
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

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>
    <Layout>{children}</Layout>
  </AuthProvider>
);

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <LayoutWrapper><HomePage /></LayoutWrapper>,
    },
    {
      path: "/games/:id",
      element: <LayoutWrapper><GameDetailPage /></LayoutWrapper>,
    },
    {
      path: "/user/:username",
      element: <LayoutWrapper><UserDetailPage /></LayoutWrapper>,
    },
    {
      path: "/favorites",
      element: <LayoutWrapper><RequireAuth><FavoritesPage /></RequireAuth></LayoutWrapper>,
    },
    {
      path: "/my-games",
      element: <LayoutWrapper><RequireAuth><MyGamesPage /></RequireAuth></LayoutWrapper>,
    },
    {
      path: "/admin/consoles",
      element: <LayoutWrapper><RequireAuth role="admin"><AdminConsolesPage /></RequireAuth></LayoutWrapper>,
    },
    {
      path: "/admin/games",
      element: <LayoutWrapper><RequireAuth role="admin"><AdminGamesPage /></RequireAuth></LayoutWrapper>,
    },
    {
      path: "/403",
      element: <LayoutWrapper><ForbiddenPage /></LayoutWrapper>,
    },
    {
      path: "*",
      element: <LayoutWrapper><NotFoundPage /></LayoutWrapper>,
    },
  ],
  {
    basename: "/ReactExpress",
  }
);
