import { useState } from "react";

const basicTasks = [
  "Düğün konsepti belirle", "Bütçe planla", "Mekan seç", "Nikah tarihi al",
  "Gelinlik seç", "Damatlık seç", "Fotoğrafçı bul", "Davetiye hazırlı",
  "Misafir listesi", "Nikah memuru ayarla", "Nikah şahitleri belirle",
  "Müzik grubu/DJ ayarla", "Düğün pastası seç", "Yemek menüsü belirle",
  "Düğün arabası ayarla", "Saç & makyaj provası", "Kına gecesi düzenle",
  "Balayı planla", "Gelin odası hazırla", "Teşekkür mesajları hazırla"
];

const WeddingBasicPlan = () => {
  const [completed, setCompleted] = useState({});

  const toggle = (task) => {
    setCompleted((prev) => ({
      ...prev,
      [task]: !prev[task]
    }));
  };

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">💖 Temel Düğün Planı</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {basicTasks.map((task, index) => (
          <div
            key={index}
            onClick={() => toggle(task)}
            className={`cursor-pointer bg-[#F4C2C2] text-base font-medium px-4 py-5 text-center rounded-xl shadow-md transition relative 
            ${completed[task] ? "opacity-50" : ""}`}
          >
            <span className={`transition ${completed[task] ? "line-through" : ""}`}>
              {task}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingBasicPlan;
