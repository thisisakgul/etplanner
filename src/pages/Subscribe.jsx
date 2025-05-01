// src/pages/Subscribe.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Subscribe() {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Premium Abonelik</h2>
      <p className="mb-6">
        Tüm premium özelliklere anında erişim, aylık sadece <strong>₺49.99</strong>.
      </p>
      <ul className="text-left mb-6 space-y-2">
        <li>• Sınırsız plan oluşturma</li>
        <li>• Reklamsız deneyim</li>
        <li>• Öncelikli müşteri desteği</li>
      </ul>
      <button
        onClick={() => navigate('/checkout')}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Şimdi Abone Ol
      </button>
      <p className="mt-4 text-sm text-gray-500">
        Zaten aboneseniz <button onClick={() => navigate('/login')} className="text-blue-600 underline">giriş yapın</button>.
      </p>
    </div>
  );
}
