// src/pages/WeddingPlan/MonthlyTaskView.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const monthNames = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

// Görev tanımları: öncelik ve önerilen süre (gün)
const taskDefinitions = {
  "Düğün konsepti belirle": { priority: 10, duration: 5 },
  "Bütçe planla": { priority: 10, duration: 3 },
  "Misafir listesi": { priority: 9, duration: 7 },
  "Mekan seç": { priority: 10, duration: 14 },
  "Nikah tarihi al": { priority: 9, duration: 1 },
  "Düğün organizatörü": { priority: 8, duration: 7 },
  "Fotoğrafçı bul": { priority: 7, duration: 5 },
  "Video çekimi ayarla": { priority: 7, duration: 3 },
  "Save the date çekimi": { priority: 6, duration: 2 },
  "Gelinlik seç": { priority: 8, duration: 10 },
  "Damatlık seç": { priority: 7, duration: 7 },
  "Gelin ayakkabısı": { priority: 6, duration: 3 },
  "Damat ayakkabısı": { priority: 5, duration: 2 },
  "Gelin buketi provası": { priority: 4, duration: 1 },
  "Gelin çiçeği seç": { priority: 5, duration: 2 },
  "Yaka çiçeği ayarla": { priority: 4, duration: 1 },
  "Saç ve makyaj provası": { priority: 5, duration: 3 },
  "Gelin kuaförü": { priority: 6, duration: 5 },
  "Nikah memuru ayarla": { priority: 7, duration: 2 },
  "Nikah şahitleri belirle": { priority: 6, duration: 1 },
  "Resmi evrakları hazırla": { priority: 8, duration: 5 },
  "Evlilik cüzdanı al": { priority: 3, duration: 1 },
  "Kına gecesi düzenle": { priority: 6, duration: 7 },
  "Bekarlığa veda planla": { priority: 5, duration: 5 },
  "Gelin hamamı organize et": { priority: 4, duration: 3 },
  "Nikah şekeri seç": { priority: 5, duration: 2 },
  "Nikah şekerlerini hazırla": { priority: 4, duration: 4 },
  "Düğün pastası seç": { priority: 6, duration: 3 },
  "Düğün menüsü belirle": { priority: 7, duration: 4 },
  "Menü tadımı yap": { priority: 5, duration: 1 },
  "Müzik grubu/DJ ayarla": { priority: 7, duration: 7 },
  "Giriş müziği seç": { priority: 4, duration: 2 },
  "İlk dans müziği": { priority: 4, duration: 2 },
  "Pasta kesim müziği": { priority: 3, duration: 1 },
  "Düğün dansı provası": { priority: 5, duration: 5 },
  "Düğün arabası ayarla": { priority: 5, duration: 3 },
  "Araç süslemesi": { priority: 3, duration: 2 },
  "Oturma düzeni yap": { priority: 5, duration: 4 },
  "Masa süsleri seç": { priority: 4, duration: 3 },
  "Masa isim kartları": { priority: 3, duration: 2 },
  "Düğün hediyelikleri": { priority: 4, duration: 5 },
  "Takı merasimi organize et": { priority: 4, duration: 2 },
  "Takı kutusu hazırla": { priority: 2, duration: 1 },
  "Yedek ayakkabı al": { priority: 2, duration: 1 },
  "Acil çanta hazırla": { priority: 2, duration: 1 },
  "Gelin odası süslemesi": { priority: 3, duration: 2 },
  "Damadın traşı": { priority: 1, duration: 1 },
  "Prova yemeği": { priority: 3, duration: 2 },
  "Ses sistemi kontrolü": { priority: 2, duration: 1 },
  "Işık sistemi kontrolü": { priority: 2, duration: 1 },
  "Günlük akış planla": { priority: 4, duration: 3 },
  "Düğün programı hazırla": { priority: 5, duration: 4 },
  "Balayı planla": { priority: 7, duration: 10 },
  "Balayı valizi hazırla": { priority: 2, duration: 2 },
  "Ulaşım planı yap": { priority: 5, duration: 3 },
  "Konaklama ayarla": { priority: 6, duration: 5 },
  "Davetiye tasarımı": { priority: 7, duration: 7 },
  "Davetiyeleri bastır": { priority: 6, duration: 3 },
  "Davetiyeleri gönder": { priority: 8, duration: 7 },
  "Teşekkür mesajları hazırla": { priority: 3, duration: 2 }
};
const DEFAULT_DURATION = 3;
const DEFAULT_PRIORITY = 5;

/**
 * distributeTasks:
 *   - start..end arasını toplam süreye göre bölerek
 *     her görevi mantıklı uzunlukta günlere yayar.
 *   - plan çok kısaysa 1 günde birden fazla görev bırakır.
 */
function distributeTasks(tasks, startDate, endDate) {
  const totalDays = Math.ceil((endDate - startDate) / 86400000) + 1;
  const durations = tasks.map(t => (taskDefinitions[t]?.duration || DEFAULT_DURATION));
  const sumDur = durations.reduce((a, b) => a + b, 0);
  const unitPerDay = sumDur / totalDays;

  const map = {}; // "YYYY-MM-DD" => [ { name, priority } ]
  let cursorDay = 0;

  tasks.forEach((task, idx) => {
    const dur = durations[idx];
    // kaç gün yayılsın?
    const daysNeeded = Math.max(1, Math.round(dur / unitPerDay));
    for (let d = 0; d < daysNeeded; d++) {
      const dt = new Date(startDate);
      dt.setDate(startDate.getDate() + cursorDay + d);
      if (dt > endDate) break;
      const key = dt.toISOString().split("T")[0];
      map[key] = map[key] || [];
      map[key].push({ name: task, priority: taskDefinitions[task]?.priority || DEFAULT_PRIORITY });
    }
    cursorDay += daysNeeded;
  });

  return map;
}

export default function MonthlyTaskView() {
  const { year, month } = useParams();
  const navigate = useNavigate();
  const currentYear = parseInt(year, 10);
  const currentMonth = parseInt(month, 10) - 1;

  const [weeks, setWeeks] = useState([]);
  const [doneMap, setDoneMap] = useState({});

  // Tamamla / tamamlamayı geri al
  const toggleDone = (key, idx) => {
    setDoneMap(prev => {
      const arr = prev[key]?.slice() || [];
      const i = arr.indexOf(idx);
      if (i >= 0) arr.splice(i, 1);
      else arr.push(idx);
      return { ...prev, [key]: arr };
    });
  };

  // Ay değiştiğinde yeniden hesapla
  useEffect(() => {
    // 1) planı al
    const plan = JSON.parse(localStorage.getItem("weddingPlan") || "{}");
    const start = new Date(plan.startDate);
    const end = new Date(plan.endDate);
    const tasks = plan.tasks || Object.keys(taskDefinitions);

    // 2) görevleri dağıt
    const byDate = distributeTasks(tasks, start, end);

    // 3) haftalara böl
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();

    let offset = firstDay.getDay(); 
    offset = offset === 0 ? 6 : offset - 1; // Pazartesi=0..Pazar=6

    const wks = [];
    let curWeek = [];

    // baştaki boş slot'lar
    for (let i = 0; i < offset; i++) {
      curWeek.push({ day: null, tasks: [], key: null });
    }
    // günleri ekle
    for (let d = 1; d <= daysInMonth; d++) {
      const dt = new Date(currentYear, currentMonth, d);
      const key = dt.toISOString().split("T")[0];
      const ts = byDate[key] || [];
      curWeek.push({ day: d, tasks: ts, key });
      if (curWeek.length === 7) {
        wks.push(curWeek);
        curWeek = [];
      }
    }
    // sondaki boşlar
    if (curWeek.length) {
      while (curWeek.length < 7) {
        curWeek.push({ day: null, tasks: [], key: null });
      }
      wks.push(curWeek);
    }

    setWeeks(wks);
  }, [currentYear, currentMonth]);

  // Aylar arası geçiş
  const goTo = offset => {
    let m = currentMonth + 1 + offset;
    let y = currentYear;
    if (m < 1) { m = 12; y--; }
    if (m > 12) { m = 1; y++; }
    navigate(`/wedding-calendar/${y}/${m}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      {/* Başlık & butonlar */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => goTo(-1)}
          className="px-4 py-2 bg-pink-100 text-pink-700 rounded"
        >
          ← Önceki Ay
        </button>
        <h1 className="text-2xl font-bold">
          {monthNames[currentMonth]} {currentYear}
        </h1>
        <button
          onClick={() => goTo(1)}
          className="px-4 py-2 bg-pink-100 text-pink-700 rounded"
        >
          Sonraki Ay →
        </button>
      </div>

      {/* Gün isimleri */}
      <div className="grid grid-cols-7 gap-2 text-center font-medium mb-4">
        {["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"].map(d => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Haftalar */}
      {weeks.map((week, wi) => (
        <div key={wi} className="mb-6">
          <h2 className="font-semibold mb-2">{wi + 1}. Hafta</h2>
          <div className="grid grid-cols-7 gap-2">
            {week.map((cell, di) => (
              <div
                key={di}
                className={`border rounded p-2 min-h-[120px] ${
                  cell.day
                    ? "bg-pink-50 border-pink-200"
                    : "bg-gray-100 border-gray-200"
                }`}
              >
                {cell.day && (
                  <div className="text-center font-medium mb-1 border-b pb-1">
                    {cell.day}
                  </div>
                )}
                <div className="space-y-1 overflow-y-auto max-h-[80px]">
                  {cell.tasks.map((t, ti) => {
                    const done = doneMap[cell.key]?.includes(ti);
                    return (
                      <div
                        key={ti}
                        onClick={() => toggleDone(cell.key, ti)}
                        className={`
                          p-1 rounded text-xs cursor-pointer
                          ${done
                            ? "bg-pink-200 line-through opacity-50"
                            : t.priority >= 8
                              ? "bg-red-100"
                              : t.priority >= 6
                                ? "bg-orange-100"
                                : "bg-yellow-100"
                          }
                        `}
                      >
                        {t.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
