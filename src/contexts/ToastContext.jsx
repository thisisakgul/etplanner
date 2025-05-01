// src/contexts/ToastContext.jsx
import React, { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success', duration = 3000) => {
    const id = uuid();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast container */}
      <div className="fixed top-4 right-4 flex flex-col space-y-2 z-50">
        {toasts.map(({ id, message, type }) => (
          <div
            key={id}
            className={`px-4 py-2 rounded shadow-lg text-white ${
              type === 'error' ? 'bg-red-500' : 'bg-green-500'
            }`}
          >
            {message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};
