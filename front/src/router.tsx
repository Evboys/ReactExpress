import { createHashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";

export const router = createHashRouter([
    { path: "/", element: <HomePage /> },
    { path: "/games/:id", element: <GameDetailPage /> }
]);
