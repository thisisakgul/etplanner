// src/pages/LessonPlan/LessonPlanType.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LessonPlanType() {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Ders Planı Seçimi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button
          onClick={() => navigate('/lesson-basic')}
          className="p-6 bg-blue-100 rounded-lg hover:bg-blue-200 transition"
        >
          <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
          <p>Ortaokul / Lise / Üniversite seviyeleri için basit plan</p>
        </button>
        <button
          onClick={() => navigate('/lesson-premium')}
          className="p-6 bg-green-100 rounded-lg hover:bg-green-200 transition"
        >
          <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
          <p>Detaylı saatli 7 günlük haftalık takvim</p>
        </button>
      </div>
    </div>
  );
}
