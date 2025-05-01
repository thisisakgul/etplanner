// src/main.jsx
import React, { useState, useEffect, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './i18n';

// Auth ve Toast context’leri
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';

export const ThemeContext = createContext();

function Main() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode') === 'true';
    setDarkMode(stored);
    document.documentElement.classList.toggle('dark', stored);
  }, []);

  const toggleDark = () => {
    setDarkMode((dm) => {
      const next = !dm;
      localStorage.setItem('darkMode', next.toString());
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDark }}>
      {/* 👉 ToastProvider burada sarmalıyor */}
      <ToastProvider>
        <App />
      </ToastProvider>
    </ThemeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
