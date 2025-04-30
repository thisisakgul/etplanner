// src/pages/SportPlan/SportCalendar.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SportCalendar() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Önce route state’inden, yoksa localStorage’dan al
  const storedPlan = state?.plan
    ? state.plan
    : JSON.parse(localStorage.getItem('sportPremiumPlan') || 'null');

  if (!storedPlan) {
    return (
      <div className="max-w-screen-md mx-auto p-6 text-center text-gray-600">
        Gösterilecek program yok.
        <div className="mt-4">
          <button
            onClick={() => navigate('/sports')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Yeni Plan Oluştur
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-md mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">Haftalık Spor Programınız</h2>
      {storedPlan.program.map((block, idx) => (
        <div key={idx} className="border rounded-lg p-4 bg-white shadow">
          <h3 className="text-lg font-semibold mb-2">
            {block.day} — {block.modality}
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            {block.exercises.map((ex, j) => (
              <li key={j}>
                {ex.name} — {ex.sets}×{ex.reps}
                {ex.unit ? ` ${ex.unit}` : ''}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
