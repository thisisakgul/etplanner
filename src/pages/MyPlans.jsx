import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyPlans = () => {
  const [plan, setPlan] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("weddingPlan") || "null");
    if (stored) setPlan(stored);
  }, []);

  if (!plan) {
    return (
      <div className="max-w-screen-lg mx-auto px-6 py-10 text-center text-gray-600">
        Henüz bir Düğün Planı oluşturulmadı.
      </div>
    );
  }

  const { startDate, endDate, createdAt, tasks } = plan;

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 flex items-center">📂 Planlarım</h1>
      <div
        onClick={() =>
          navigate("/wedding-calendar", {
            state: { tasks, startDate, endDate },
          })
        }
        className="cursor-pointer bg-pink-100 hover:bg-pink-200 transition p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">Düğün Planı</h2>
        <p>
          <span className="font-medium">Başlangıç:</span> {startDate}
        </p>
        <p>
          <span className="font-medium">Bitiş:</span> {endDate}
        </p>
        <p>
          <span className="font-medium">Oluşturulma:</span>{" "}
          {new Date(createdAt).toLocaleString()}
        </p>
        <p className="mt-2 text-gray-700">
          Görev sayısı: <span className="font-medium">{tasks.length}</span>
        </p>
      </div>
    </div>
  );
};

export default MyPlans;
