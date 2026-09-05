import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../../services/auth";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const user = await getCurrentUser();

      setAuthenticated(Boolean(user));
      setLoading(false);
    }

    checkAuth();
  }, []);

  if (loading) {
    return null;
  }

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}