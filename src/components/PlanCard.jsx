// src/components/PlanCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PlanCard = ({ plan }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("🔔 Plan tıklandı:", plan);
    if (plan.type === "Düğün") {
      const [year, month] = plan.startDate.split("-");
      navigate(`/wedding-calendar/${year}/${parseInt(month, 10)}`);
    } else if (plan.type === "Spor") {
      navigate("/sport-plan-type");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-pink-100 hover:bg-pink-200 transition p-6 rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold mb-2">{plan.type} Planı</h2>
      {plan.startDate && <p>Başlangıç: {plan.startDate}</p>}
      {plan.endDate   && <p>Bitiş:     {plan.endDate}</p>}
      {plan.createdAt && (
        <p>Oluşturma: {new Date(plan.createdAt).toLocaleString()}</p>
      )}
      {Array.isArray(plan.tasks) && (
        <p>Görev sayısı: {plan.tasks.length}</p>
      )}
    </div>
  );
};

export default PlanCard;
