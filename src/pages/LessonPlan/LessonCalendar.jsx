// src/pages/LessonPlan/LessonCalendar.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LessonCalendar() {
  const { plan, schedule } = useLocation().state || {};
  const navigate = useNavigate();
  const days = plan ? Object.keys(plan) : Object.keys(schedule);

  if (!plan && !schedule) {
    return (
      <div className="max-w-screen-md mx-auto p-6 text-center text-gray-600">
        Ders planı bulunamadı.
        <button
          onClick={() => navigate("/lesson-plan-type")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Başlangıca Dön
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-screen-md mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">Haftalık Ders Takvimi</h2>
      {days.map(day => (
        <div key={day} className="border rounded p-4 bg-gray-50">
          <h3 className="font-semibold mb-2">{day}</h3>
          {plan && plan[day].length === 0 && <p className="text-gray-500">Ders yok</p>}
          {plan && plan[day].map((sub,i) => <div key={i}>• {sub}</div>)}

          {schedule && schedule[day].map((item,i) => (
            <div key={i} className="mb-1">
              <strong>{item.time}</strong> — {item.subject}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
