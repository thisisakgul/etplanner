// src/pages/MyPlans.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../contexts/ToastContext";

export default function MyPlans() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [plans, setPlans] = useState([]);
  const [filter, setFilter] = useState("all"); // "all" | "sport" | "lesson" | "wedding"

  useEffect(() => {
    const loaded = [];

    // Düğün Planı
    const weddingJson = localStorage.getItem("weddingPlan");
    if (weddingJson) {
      const p = JSON.parse(weddingJson);
      loaded.push({
        key: "weddingPlan",
        type: "Düğün Planı",
        category: "wedding",
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
        category: "sport",
        startDate: p.startDate,
        endDate: p.endDate,
        createdAt: p.createdAt,
        route: "/sports/calendar",
        state: { plan: p.plan }
      });
    }

    // Spor Planı (Premium)
    const sportPremiumJson = localStorage.getItem("sportPremiumPlan");
    if (sportPremiumJson) {
      const p = JSON.parse(sportPremiumJson);
      loaded.push({
        key: "sportPremiumPlan",
        type: "Spor Planı (Premium)",
        category: "sport",
        createdAt: p.createdAt,
        route: "/sports/calendar",
        state: { schedule: p.schedule }
      });
    }

    // Ders Planı (Basic)
    const lessonBasicJson = localStorage.getItem("lessonBasicPlan");
    if (lessonBasicJson) {
      const p = JSON.parse(lessonBasicJson);
      loaded.push({
        key: "lessonBasicPlan",
        type: "Ders Planı (Basic)",
        category: "lesson",
        createdAt: p.createdAt,
        route: "/lesson-calendar",
        state: { plan: p.plan }
      });
    }

    // Ders Planı (Premium)
    const lessonPremiumJson = localStorage.getItem("lessonPremiumPlan");
    if (lessonPremiumJson) {
      const p = JSON.parse(lessonPremiumJson);
      loaded.push({
        key: "lessonPremiumPlan",
        type: "Ders Planı (Premium)",
        category: "lesson",
        createdAt: p.createdAt,
        route: "/lesson-calendar",
        state: { schedule: p.schedule }
      });
    }

    setPlans(loaded);
  }, []);

  // Plan silme
  const handleDelete = key => {
    if (!window.confirm("Bu planı gerçekten silmek istiyor musunuz?")) return;
    localStorage.removeItem(key);
    setPlans(prev => prev.filter(p => p.key !== key));
    addToast("Plan başarıyla silindi", "success");
  };

  // Plan düzenleme
  const handleEdit = plan => {
    switch (plan.category) {
      case "sport":
        navigate(
          plan.key.includes("Premium") ? "/sports/premium" : "/sports/basic",
          { state: plan.state }
        );
        break;
      case "lesson":
        navigate(
          plan.key.includes("Premium")
            ? "/lesson-plan/premium"
            : "/lesson-plan/basic",
          { state: plan.state }
        );
        break;
      case "wedding":
        navigate("/wedding-setup", { state: plan.state });
        break;
      default:
        return;
    }
    addToast("Düzenleme sayfasına yönlendiriliyorsunuz", "success");
  };

  // Filtrelenmiş planlar
  const filtered = plans.filter(p =>
    filter === "all" ? true : p.category === filter
  );

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

      {/* Filtreleme butonları */}
      <div className="flex space-x-4 mb-6">
        {[
          { label: "Tümü", value: "all" },
          { label: "Spor", value: "sport" },
          { label: "Ders", value: "lesson" },
          { label: "Düğün", value: "wedding" }
        ].map(f => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-1 rounded ${
              filter === f.value
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Plan kartları */}
      <div className="space-y-4">
        {filtered.map(plan => (
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
            <div className="flex space-x-2">
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleEdit(plan);
                }}
                className="px-3 py-1 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500"
              >
                Düzenle
              </button>
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleDelete(plan.key);
                }}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
