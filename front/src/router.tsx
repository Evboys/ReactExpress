import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";

export const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/games/:id", element: <GameDetailPage /> }
]);
