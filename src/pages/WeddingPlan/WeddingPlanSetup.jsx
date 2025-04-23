import { useState } from "react";
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
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleToggle = (task) => {
    setSelectedTasks(prev =>
      prev.includes(task)
        ? prev.filter(t => t !== task)
        : [...prev, task]
    );
  };

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Düğün Planlama Görevleri</h1>

      {step === 1 && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tasks.map((task, idx) => {
              const selected = selectedTasks.includes(task);
              return (
                <button
                  key={idx}
                  onClick={() => handleToggle(task)}
                  className={`rounded-full px-4 py-2 text-sm font-medium border shadow-sm bg-[#F4C2C2] transition ${
                    selected ? "opacity-50" : "hover:opacity-80"
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
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
            >
              Devam Et
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Başlangıç Tarihi</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Bitiş Tarihi</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            />
          </div>
          <div className="pt-4 text-center">
            <button
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

                // Tek bir planı sakla
                localStorage.setItem("weddingPlan", JSON.stringify(planData));

                // Takvime yönlendir
                navigate("/wedding-calendar", {
                  state: { tasks: remainingTasks, startDate, endDate },
                });
              }}
              className={`px-6 py-3 rounded font-medium transition ${
                startDate && endDate
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
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
