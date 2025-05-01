import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function WeddingPlanType() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const basicFeatures = [
    'Temel düğün görev listesi',
    'Görev takibi ve onay',
    'Misafir listesi ve bildirimler'
  ];
  const premiumFeatures = [
    '💍 Kapsamlı düğün planlama takvimi',
    '📋 Özel görev hatırlatıcıları',
    '💰 Tedarikçi yönetimi ve bütçe takibi',
    '📸 Anlık güncellemeler ve fotoğraf rehberleri'
  ];

  return (
    <div
      className="
        max-w-screen-lg mx-auto px-6 py-12 rounded-2xl
        bg-pastelPink/10 dark:bg-gray-900
        border-4 border-pastelPink/50 dark:border-gray-700
      "
    >
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        Düğün Planlaması Seçenekleri
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Temel Plan */}
        <div
          className="
            p-8 rounded-xl shadow-lg
            bg-pastelPink/30 dark:bg-pastelPink/20
          "
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Temel Plan
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-300">
            {basicFeatures.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <button
            onClick={() => navigate('/wedding-basic')}
            className="
              w-full py-3 bg-pastelPink text-white
              font-semibold rounded-lg transition
              hover:bg-pastelPink/90
            "
          >
            Temel Planı Seç
          </button>
        </div>

        {/* Premium Plan */}
        <div
          className="
            p-8 rounded-xl shadow-lg
            bg-pastelPink/20 dark:bg-pastelPink/10
          "
        >
          <h2 className="text-2xl font-bold mb-6 text-pastelPink">
            Premium Planı
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-300">
            {premiumFeatures.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <button
            onClick={() =>
              user ? navigate('/wedding-setup') : navigate('/login')
            }
            className="
              w-full py-3 bg-pastelPink text-white
              font-semibold rounded-lg transition
              hover:bg-pastelPink/90
            "
          >
            Premium Planı Al
          </button>
        </div>
      </div>
    </div>
  );
}
