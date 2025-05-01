import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext();

/**
 * Sağladığı değerler:
 * - user: Firebase user objesi + isPremium bayrağı
 * - loading: başlangıçta auth durumunu kontrol ederken true
 * - logout: çıkış yapar ve premium flag’ini temizler
 * - setUser: (demo amaçlı) context içindeki user’ı güncelleme imkânı
 */
export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, firebaseUser => {
      if (firebaseUser) {
        const isPremium = localStorage.getItem("isPremium") === "true";
        setUser({ ...firebaseUser, isPremium });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("isPremium");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
