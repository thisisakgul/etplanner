// src/pages/MyPlans.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyPlans() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const loaded = [];

    // Düğün Planı
    const weddingJson = localStorage.getItem("weddingPlan");
    if (weddingJson) {
      const p = JSON.parse(weddingJson);
      loaded.push({
        key: "weddingPlan",
        type: "Düğün Planı",
        startDate: p.startDate,
        endDate: p.endDate,
        createdAt: p.createdAt,
        route: "/wedding-calendar",
        state: { tasks: p.tasks, startDate: p.startDate, endDate: p.endDate }
      });
    }

    // Spor Planı (Basic)
    const sportBasicJson = localStorage.getItem("sportBasicPlan");
    if (sportBasicJson) {
      const p = JSON.parse(sportBasicJson);
      loaded.push({
        key: "sportBasicPlan",
        type: "Spor Planı (Basic)",
        // eğer tarihler varsa:
        startDate: p.startDate,
        endDate: p.endDate,
        createdAt: p.createdAt,
        route: "/sports/calendar",
        state: { plan: p }
      });
    }

    // Spor Planı (Premium)
    const sportPremiumJson = localStorage.getItem("sportPremiumPlan");
    if (sportPremiumJson) {
      const p = JSON.parse(sportPremiumJson);
      loaded.push({
        key: "sportPremiumPlan",
        type: "Spor Planı (Premium)",
        createdAt: p.createdAt,
        route: "/sports/calendar",
        state: { plan: p }
      });
    }

    // Ders Planı (Basic)
    const lessonBasicJson = localStorage.getItem("lessonBasicPlan");
    if (lessonBasicJson) {
      const p = JSON.parse(lessonBasicJson);
      loaded.push({
        key: "lessonBasicPlan",
        type: "Ders Planı (Basic)",
        createdAt: p.createdAt,
        route: "/lesson-calendar",
        state: { plan: p }
      });
    }

    // Ders Planı (Premium)
    const lessonPremiumJson = localStorage.getItem("lessonPremiumPlan");
    if (lessonPremiumJson) {
      const p = JSON.parse(lessonPremiumJson);
      loaded.push({
        key: "lessonPremiumPlan",
        type: "Ders Planı (Premium)",
        createdAt: p.createdAt,
        route: "/lesson-calendar",
        state: { plan: p }
      });
    }

    setPlans(loaded);
  }, []);

  if (plans.length === 0) {
    return (
      <div className="mt-20 text-center text-gray-500">
        Henüz oluşturulmuş bir planınız yok.
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Planlarım</h1>
      <div className="space-y-4">
        {plans.map(plan => (
          <div
            key={plan.key}
            onClick={() => navigate(plan.route, { state: plan.state })}
            className="flex justify-between items-center p-4 border rounded-lg hover:shadow-lg transition cursor-pointer"
          >
            <div>
              <h2 className="font-semibold">{plan.type}</h2>
              {plan.startDate && plan.endDate && (
                <p className="text-sm text-gray-600">
                  {plan.startDate} — {plan.endDate}
                </p>
              )}
              <p className="text-xs text-gray-500">
                Oluşturulma:{" "}
                {new Date(plan.createdAt).toLocaleDateString("tr-TR")}
              </p>
            </div>
            <button className="text-blue-600 hover:underline">Görüntüle</button>
          </div>
        ))}
      </div>
    </div>
  );
}
