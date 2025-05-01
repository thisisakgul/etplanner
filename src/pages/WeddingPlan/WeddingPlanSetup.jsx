// src/pages/WeddingPlan/WeddingPlanSetup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../contexts/ToastContext";
import Spinner from "../../components/Spinner";

const WeddingPlanSetup = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
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
  const [loading, setLoading]             = useState(false);

  const handleToggle = task => {
    setSelectedTasks(prev =>
      prev.includes(task) ? prev.filter(t => t !== task) : [...prev, task]
    );
  };

  const handleCreate = () => {
    if (selectedTasks.length === 0) {
      addToast("En az bir görev seçmelisiniz", "error");
      return;
    }
    if (!startDate || !endDate) {
      addToast("Tarihleri eksiksiz seçin", "error");
      return;
    }

    setLoading(true);
    const remainingTasks = tasks.filter(t => !selectedTasks.includes(t));
    const planData = {
      type: "Düğün",
      tasks: remainingTasks,
      startDate,
      endDate,
      createdAt: new Date().toISOString(),
    };
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("weddingPlan", JSON.stringify(planData));
      addToast("Düğün planı oluşturuldu", "success");
      navigate("/wedding-calendar", {
        state: { tasks: remainingTasks, startDate, endDate },
      });
    }, 500);
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="max-w-screen-lg mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Düğün Planlama Görevleri</h1>

        {step === 1 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tasks.map((task, idx) => {
                const sel = selectedTasks.includes(task);
                return (
                  <button
                    key={idx}
                    onClick={() => handleToggle(task)}
                    className={`rounded-full px-4 py-2 text-sm font-medium border shadow-sm bg-[#F4C2C2] transition ${
                      sel ? "opacity-50 line-through" : "hover:opacity-80"
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
                <input
                  type="date"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                  className="w-full pl-3 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                />
              </div>
              {/* Bitiş Tarihi */}
              <div>
                <label className="block mb-2 font-medium">Bitiş Tarihi</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                  className="w-full pl-3 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={handleCreate}
                className="px-8 py-3 rounded-xl font-semibold bg-green-600 text-white hover:bg-green-700 transition"
              >
                Planı Oluştur
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WeddingPlanSetup;
