import React from 'react';

export default function About() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🎯 Hakkımızda</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Everything Planner</strong>, düğün, spor ve ders programlarınızı
          tek bir çatı altında; modern, hızlı ve güvenli bir şekilde planlamanızı
          sağlayan hepsi bir arada bir web uygulamasıdır.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>🎉 Düğün planlamasından haftalık spor ve ders takvimlerine kadar her alanda çözüm.</li>
          <li>🚀 Anlık bildirimler, grafikler ve performans takibi.</li>
          <li>🔒 Firebase ile güvenli kimlik doğrulama ve veritabanı.</li>
          <li>🌗 Gündüz/gece modu ve çoklu dil desteği.</li>
        </ul>
      </div>
    </div>
  );
}
