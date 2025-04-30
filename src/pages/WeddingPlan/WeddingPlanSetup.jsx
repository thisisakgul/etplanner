// src/pages/WeddingPlan/WeddingPlanSetup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WeddingPlanSetup = () => {
  const navigate = useNavigate();

  const tasks = [
    "Düğün konsepti belirle", "Bütçe planla", "Misafir listesi", "Mekan seç", "Nikah tarihi al",
    "Düğün organizatörü", "Fotoğrafçı bul", "Video çekimi ayarla", "Save the date çekimi",
    "Gelinlik seç", "Damatlık seç", "Gelin ayakkabısı", "Damat ayakkabısı", "Gelin buketi provası",
    "Gelin çiçeği seç", "Yaka çiçeği ayarla", "Saç ve makyaj provası", "Gelin kuaförü",
    "Nikah memuru ayarla", "Nikah şahitleri belirle", "Resmi evrakları hazırla", "Evlilik cüzdanı al",
    "Kına gecesi düzenle", "Bekarlığa veda planla", "Gelin hamamı organize et", "Nikah şekeri seç",
    "Nikah şekerlerini hazırla", "Düğün pastası seç", "Düğün menüsü belirle", "Menü tadımı yap",
    "Müzik grubu/DJ ayarla", "Giriş müziği seç", "İlk dans müziği", "Pasta kesim müziği",
    "Düğün dansı provası", "Düğün arabası ayarla", "Araç süslemesi", "Oturma düzeni yap",
    "Masa süsleri seç", "Masa isim kartları", "Düğün hediyelikleri", "Takı merasimi organize et",
    "Takı kutusu hazırla", "Yedek ayakkabı al", "Acil çanta hazırla", "Gelin odası süslemesi",
    "Damadın traşı", "Prova yemeği", "Ses sistemi kontrolü", "Işık sistemi kontrolü",
    "Günlük akış planla", "Düğün programı hazırla", "Balayı planla", "Balayı valizi hazırla",
    "Ulaşım planı yap", "Konaklama ayarla", "Davetiye tasarımı", "Davetiyeleri bastır",
    "Davetiyeleri gönder", "Teşekkür mesajları hazırla"
  ];

  const [selectedTasks, setSelectedTasks] = useState([]);
  const [step, setStep]                   = useState(1);
  const [startDate, setStartDate]         = useState("");
  const [endDate, setEndDate]             = useState("");

  const handleToggle = task => {
    setSelectedTasks(prev =>
      prev.includes(task)
        ? prev.filter(t => t !== task)
        : [...prev, task]
    );
  };

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Düğün Planlama Görevleri</h1>

      {step === 1 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tasks.map((task, idx) => {
              const selected = selectedTasks.includes(task);
              return (
                <button
                  key={idx}
                  onClick={() => handleToggle(task)}
                  className={`rounded-full px-4 py-2 text-sm font-medium border shadow-sm bg-[#F4C2C2] transition ${
                    selected ? "opacity-50 line-through" : "hover:opacity-80"
                  }`}
                >
                  {task}
                </button>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => setStep(2)}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Devam Et
            </button>
          </div>
        </>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center">Tarihleri Seçin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Başlangıç Tarihi */}
            <div>
              <label className="block mb-2 font-medium">Başlangıç Tarihi</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V9a2 2 0 
                             00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="date"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M5 8h14M5 12h14M5 16h14" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Bitiş Tarihi */}
            <div>
              <label className="block mb-2 font-medium">Bitiş Tarihi</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V9a2 2 0 
                             00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="date"
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M5 8h14M5 12h14M5 16h14" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              disabled={!startDate || !endDate}
              onClick={() => {
                const remainingTasks = tasks.filter(t => !selectedTasks.includes(t));
                const planData = {
                  type: "Düğün",
                  tasks: remainingTasks,
                  startDate,
                  endDate,
                  createdAt: new Date().toISOString(),
                };
                localStorage.setItem("weddingPlan", JSON.stringify(planData));
                navigate("/wedding-calendar", {
                  state: { tasks: remainingTasks, startDate, endDate },
                });
              }}
              className={`px-8 py-3 rounded-xl font-semibold transition ${
                startDate && endDate
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Planı Oluştur
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingPlanSetup;
