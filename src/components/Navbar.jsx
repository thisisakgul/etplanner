import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../main.jsx';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { darkMode, toggleDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  // Google Translate’i yalnızca bir kez yükle
  useEffect(() => {
    if (!document.getElementById('gt-script')) {
      const s = document.createElement('script');
      s.id = 'gt-script';
      s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(s);
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'tr',
            includedLanguages: 'tr,en',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          'google_translate_element'
        );
      };
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md rounded-b-3xl relative">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-2 px-6">
        {/* — Dil Seçici */}
        <div id="google_translate_element" className="text-xs" />

        {/* — Sol Linkler */}
        <div className="flex space-x-6">
          <Link to="/about"   className="text-gray-800 dark:text-gray-100 hover:underline">
            Hakkımızda
          </Link>
          <Link to="/contact" className="text-gray-800 dark:text-gray-100 hover:underline">
            İletişim
          </Link>
        </div>

        {/* — Logo */}
        <div className="flex-1 flex justify-center">
          <Link to="/">
            <Header />
          </Link>
        </div>

        {/* — Sağ Butonlar */}
        <div className="flex items-center space-x-4">
          {/* Tema Toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded transition bg-gray-100 dark:bg-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Planlarım */}
          <Link to="/myplans" className="text-gray-800 dark:text-gray-100 hover:underline">
            Planlarım
          </Link>

          {/* Abone Ol (premium değilse) */}
          {user && !user.isPremium && (
            <button
              onClick={() => navigate('/subscribe')}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Abone Ol
            </button>
          )}

          {user ? (
            <>
              <span className="text-gray-700 dark:text-gray-300">
                Merhaba, {(user.displayName || user.email).split('@')[0]}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 dark:bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-600 dark:hover:bg-red-700 transition"
              >
                Çıkış
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-800 dark:text-gray-100 hover:underline">
                Giriş
              </Link>
              <Link
                to="/register"
                className="bg-black dark:bg-white text-white dark:text-gray-800 px-3 py-1.5 rounded hover:bg-gray-700 dark:hover:bg-gray-200 transition"
              >
                Kayıt
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
