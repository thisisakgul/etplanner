// src/pages/Subscribe.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Subscribe() {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Premium Abonelik</h2>
      <p className="text-center text-gray-600 mb-6">
        Tüm premium özelliklere anında erişim, aylık sadece <span className="font-semibold">₺49.99</span>.
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
        <li>Sınırsız plan oluşturma</li>
        <li>Reklamsız deneyim</li>
        <li>Öncelikli müşteri desteği</li>
      </ul>
      <button
        onClick={() => navigate('/checkout')}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Şimdi Abone Ol
      </button>
      <p className="mt-4 text-center text-sm text-gray-500">
        Zaten aboneseniz{' '}
        <button
          onClick={() => navigate('/login')}
          className="text-blue-600 hover:underline"
        >
          giriş yapın
        </button>
      </p>
    </div>
  );
}
