import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../main.jsx";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { darkMode, toggleDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-2 px-6 flex items-center justify-between rounded-b-3xl">
      {/* Sol linkler */}
      <div className="flex space-x-4 items-center">
        <Link
          to="/about"
          className="text-gray-800 dark:text-white text-sm hover:underline"
        >
          Hakkımızda
        </Link>
        <Link
          to="/contact"
          className="text-gray-800 dark:text-white text-sm hover:underline"
        >
          İletişim
        </Link>
      </div>

      {/* Ortadaki logo */}
      <div className="flex-1 flex justify-center">
        <Link to="/">
          <Header />
        </Link>
      </div>

      {/* Sağ butonlar */}
      <div className="flex space-x-4 items-center">
        {/* Tema switch */}
        <button
          onClick={toggleDark}
          className="p-2 text-lg text-gray-800 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Planlarım */}
        <Link
          to="/myplans"
          className="text-gray-800 dark:text-white text-sm hover:underline"
        >
          Planlarım
        </Link>

        {/* Girişli & abonelik kontrol */}
        {user && !user.isPremium && (
          <button
            onClick={() => navigate("/subscribe")}
            className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
          >
            Abone Ol
          </button>
        )}

        {user ? (
          <>
            <span className="text-gray-700 dark:text-gray-300 text-sm">
              Merhaba,{" "}
              {(user.displayName || user.email)
                .split("@")[0]}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 dark:bg-red-600 text-white text-sm px-3 py-1.5 rounded hover:bg-red-600 dark:hover:bg-red-700 transition"
            >
              Çıkış
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-800 dark:text-white text-sm hover:underline"
            >
              Giriş
            </Link>
            <Link
              to="/register"
              className="bg-black dark:bg-white text-white dark:text-gray-800 text-sm px-3 py-1.5 rounded hover:bg-gray-700 dark:hover:bg-gray-200 transition"
            >
              Kayıt
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
