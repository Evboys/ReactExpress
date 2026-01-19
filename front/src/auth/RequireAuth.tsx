import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import type { JSX } from "react/jsx-dev-runtime";

export default function RequireAuth({
  children,
  role,
}: {
  children: JSX.Element;
  role?: "admin";
}) {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}
