import React, { useContext } from "react";
import {
  Navigate,
  useLocation,
} from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({
  children,
  requirePremium = false,
}) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return null; // iskelet yükleyici koyabilirsiniz

  if (!user) {
    // login değilse
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  if (requirePremium && !user.isPremium) {
    // premium değilse
    return (
      <Navigate
        to="/subscribe"
        replace
      />
    );
  }

  return children;
}
