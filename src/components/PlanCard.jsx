import React from "react";
import { useNavigate } from "react-router-dom";

const PlanCard = ({
  // Planlarım’dan geliyorsa:
  plan,
  // Home’dan geliyorsa:
  title,
  description,
  width = "w-[24rem]",
  height = "h-[520px]",
  hoverTranslate = "hover:-translate-y-4",
  bgColor = "bg-gray-100",
  onClick,
}) => {
  const navigate = useNavigate();

  // Home’daki generic kart için tıklama  
  const handleGenericClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Planlarım’daki detaylı kart için tıklama  
  const handlePlanClick = () => {
    if (!plan) return;
    const { type, startDate } = plan;
    if (type === "Düğün" && startDate) {
      const [year, month] = startDate.split("-");
      navigate(`/wedding-calendar/${year}/${parseInt(month, 10)}`);
    } else if (type === "Spor") {
      navigate("/sport-plan-type");
    } else if (type === "Ders") {
      navigate("/lesson-plan-type");
    }
  };

  // Eğer bir plan objesi geldi ise → detay görünüm
  if (plan) {
    let colorClass = "bg-gray-100 hover:bg-gray-200";
    if (plan.type === "Düğün")  colorClass = "bg-pink-100 hover:bg-pink-200";
    if (plan.type === "Spor")   colorClass = "bg-green-100 hover:bg-green-200";
    if (plan.type === "Ders")    colorClass = "bg-blue-100 hover:bg-blue-200";

    return (
      <div
        onClick={handlePlanClick}
        className={`cursor-pointer transition p-6 rounded-lg shadow ${colorClass}`}
      >
        <h2 className="text-2xl font-bold mb-2">{plan.type} Planı</h2>
        {plan.startDate && <p className="text-sm">Başlangıç: {plan.startDate}</p>}
        {plan.endDate   && <p className="text-sm">Bitiş: {plan.endDate}</p>}
        {plan.createdAt && (
          <p className="text-xs text-gray-600">
            Oluşturma: {new Date(plan.createdAt).toLocaleString()}
          </p>
        )}
        {Array.isArray(plan.tasks) && (
          <p className="text-sm mt-2">Görev sayısı: {plan.tasks.length}</p>
        )}
      </div>
    );
  }

  // Aksi halde Home’daki generic kart görünümü
  return (
    <div
      onClick={handleGenericClick}
      className={`
        relative cursor-pointer
        transition-all duration-300
        p-8 rounded-3xl shadow-lg
        ${width} ${height} ${hoverTranslate} ${bgColor}
        group
      `}
    >
      {/* Başlık: sağ üstte */}
      <h2 className="absolute top-10 right-10 text-2xl font-semibold text-gray-800">
        {title}
      </h2>

      {/* Açıklama: sol üstte, sadece hover’da gözükür */}
      <p className="
        absolute top-8 left-6  w-[30%]
        text-sm text-gray-600
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      ">
        {description}
      </p>
    </div>
  );
};

export default PlanCard;
