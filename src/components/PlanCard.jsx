// src/components/PlanCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlanCard({
  plan,
  title,
  description,
  width = "w-[24rem]",
  height = "h-[520px]",
  hoverTranslate = "hover:-translate-y-4",
  bgColor = "bg-gray-100",             // light-mode default
  darkBgColor = "dark:bg-gray-800",    // dark-mode default
  onClick,
}) {
  const navigate = useNavigate();

  // Ana sayfa generic click
  const handleGenericClick = () => {
    if (onClick) onClick();
  };

  // “Planlarım” click
  const handlePlanClick = () => {
    if (!plan) return;
    const { type, startDate } = plan;
    if (type.includes("Düğün") && startDate) {
      const [year, month] = startDate.split("-");
      navigate(`/wedding-calendar/${year}/${parseInt(month, 10)}`, {
        state: plan,
      });
    } else if (type.includes("Spor")) {
      navigate("/sports/calendar", { state: { plan } });
    } else if (type.includes("Ders")) {
      navigate("/lesson-plan/calendar", { state: { plan } });
    }
  };

  // Eğer plan objesi varsa → Planlarım stili
  if (plan) {
    // Plan tipine göre renk ataması (tam opak)
    let bg = "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700";
    if (plan.type.includes("Düğün")) {
      bg = "bg-pastelPink dark:bg-pastelPink hover:bg-pastelPink/90";
    }
    if (plan.type.includes("Spor")) {
      bg = "bg-pastelBlue dark:bg-pastelBlue hover:bg-pastelBlue/90";
    }
    if (plan.type.includes("Ders")) {
      bg = "bg-pastelGreen dark:bg-pastelGreen hover:bg-pastelGreen/90";
    }

    return (
      <div
        onClick={handlePlanClick}
        className={`cursor-pointer transition p-6 rounded-lg shadow ${bg}`}
      >
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          {plan.type}
        </h2>
        {plan.startDate && (
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Başlangıç: {plan.startDate}
          </p>
        )}
        {plan.endDate && (
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Bitiş: {plan.endDate}
          </p>
        )}
        {plan.createdAt && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Oluşturma:{" "}
            {new Date(plan.createdAt).toLocaleString("tr-TR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
        {Array.isArray(plan.tasks) && (
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
            Görev sayısı: {plan.tasks.length}
          </p>
        )}
      </div>
    );
  }

  // Aksi halde Ana Sayfa kartı
  return (
    <div
      onClick={handleGenericClick}
      className={`
        relative cursor-pointer
        transition-all duration-300
        p-8 rounded-3xl shadow-lg
        ${width} ${height} ${hoverTranslate}
        ${bgColor} ${darkBgColor}
        group
      `}
    >
      {/* Başlık */}
      <h2 className="absolute top-10 right-10 text-2xl font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </h2>

      {/* Açıklama (hover’da görünür ve artık beyaz) */}
      <p
        className={`
          absolute top-8 left-6 w-[30%]
          text-base text-white
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        `}
      >
        {description}
      </p>
    </div>
  );
}
