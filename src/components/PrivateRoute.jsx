// src/components/PrivateRoute.jsx
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ children, requirePremium = false }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Debug log
  console.log("🔒 PrivateRoute:", { requirePremium, user, loading });

  if (loading) {
    return <div className="flex justify-center mt-20">Yükleniyor…</div>;
  }
  if (!user) {
    console.log("→ yönlendiriliyor: /login");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (requirePremium && !user.isPremium) {
    console.log("→ premium değil, yönlendiriliyor: /subscribe");
    return <Navigate to="/subscribe" state={{ from: location }} replace />;
  }
  console.log("→ erişim verildi");
  return children;
}
