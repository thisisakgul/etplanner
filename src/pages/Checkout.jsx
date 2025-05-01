// src/pages/Checkout.jsx
import React from 'react';

export default function Checkout() {
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Ödeme Sayfası</h2>
      <p className="text-gray-600 mb-6">
        Stripe/ödeme entegrasyonu burada olacak.  
        (Şimdilik placeholder)
      </p>
      <button
        disabled
        className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg cursor-not-allowed"
      >
        Ödeme Adımı Yakında
      </button>
    </div>
  );
}
