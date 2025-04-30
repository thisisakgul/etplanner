// src/pages/LessonPlan/MonthlyLessonView.jsx
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function MonthlyLessonView() {
  // URL parametreleri
  const { year, month } = useParams();
  // buildPlan veya buildDetailed ile gönderilen state
  const locationState = useLocation().state || {};
  const { plan, schedule } = locationState;
  const data = plan || schedule || {};

  // Haftanın günleri (plan ve schedule objelerinde aynı anahtar isimleriyle)
  const days = Object.keys(data);

  return (
    <div className="max-w-screen-md mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">
        Detaylı Hafta Görünümü — {month}/{year}
      </h2>

      {days.map((day) => (
        <div key={day} className="border rounded-lg p-4 bg-gray-50">
          <h3 className="font-semibold mb-2">{day}</h3>

          {/* Basic plan: dizi içinde strings */}
          {plan && plan[day].length === 0 && (
            <p className="text-gray-500">Bu gün için ders yok.</p>
          )}
          {plan &&
            plan[day].map((subject, idx) => (
              <div key={idx} className="mb-1">
                • {subject}
              </div>
            ))}

          {/* Premium plan: dizi içinde { subject, time } objeleri */}
          {schedule && schedule[day].length === 0 && (
            <p className="text-gray-500">Bu gün için ders yok.</p>
          )}
          {schedule &&
            schedule[day].map((item, idx) => (
              <div key={idx} className="mb-1">
                <strong>{item.time}</strong> — {item.subject}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
