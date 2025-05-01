// src/pages/LessonPlan/LessonBasicPlan.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../contexts/ToastContext";
import Spinner from "../../components/Spinner";

const grades = {
  ortaokul: ["Matematik","Fen Bilimleri","Türkçe","Sosyal Bilgiler","İngilizce","Beden Eğitimi"],
  lise:     ["Matematik","Fizik","Kimya","Biyoloji","Tarih","Coğrafya","Edebiyat","İngilizce"]
};
const days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

export default function LessonBasicPlan() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState(null);
  const [selected, setSelected] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  const toggle = sub => {
    setSelected(sel =>
      sel.includes(sub) ? sel.filter(x => x !== sub) : [...sel, sub]
    );
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && newCourse.trim()) {
      e.preventDefault();
      if (!selected.includes(newCourse.trim())) {
        setSelected([...selected, newCourse.trim()]);
      }
      setNewCourse("");
    }
  };

  const removeCourse = c => setSelected(sel => sel.filter(x => x !== c));

  const buildPlan = () => {
    setLoading(true);
    const plan = {};
    days.forEach(day => {
      plan[day] = [...selected];
    });

    localStorage.setItem(
      "lessonBasicPlan",
      JSON.stringify({
        type: "Basic",
        level,
        lessons: selected,
        plan,
        createdAt: new Date().toISOString()
      })
    );

    setTimeout(() => {
      setLoading(false);
      addToast("Basic ders planı oluşturuldu", "success");
      navigate("/lesson-calendar", { state: { plan } });
    }, 500);
  };

  if (!level) {
    return (
      <div className="max-w-screen-md mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Seviye Seçimi</h2>
        <div className="grid grid-cols-3 gap-4">
          <button onClick={() => setLevel("ortaokul")} className="p-4 border rounded hover:bg-gray-100">
            ORTAOKUL<br/><span className="text-sm">(6-7-8)</span>
          </button>
          <button onClick={() => setLevel("lise")} className="p-4 border rounded hover:bg-gray-100">
            LİSE<br/><span className="text-sm">(9-12)</span>
          </button>
          <button onClick={() => setLevel("universite")} className="p-4 border rounded hover:bg-gray-100">
            ÜNİVERSİTE<br/><span className="text-sm">(1-4)</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading && <Spinner />}
      <div className="max-w-screen-md mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {level === "ortaokul"
            ? "Ortaokul Dersleri"
            : level === "lise"
            ? "Lise Dersleri"
            : "Üniversite Dersleri"}
        </h2>

        {level === "universite" ? (
          <>
            <label className="block mb-2">Ders ekleyin ve Enter’a basın</label>
            <input
              type="text"
              value={newCourse}
              onChange={e => setNewCourse(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Örn: Veri Yapıları"
              className="w-full border rounded p-2 mb-4"
            />
            <div className="flex flex-wrap gap-2 mb-6">
              {selected.map((c,i) => (
                <span key={i} className="flex items-center bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                  {c}
                  <button onClick={() => removeCourse(c)} className="ml-2 font-bold">×</button>
                </span>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {grades[level].map(sub => (
              <button
                key={sub}
                onClick={() => toggle(sub)}
                className={`p-3 border rounded ${
                  selected.includes(sub) ? "bg-yellow-200 border-yellow-500" : "hover:bg-gray-100"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        <button
          disabled={selected.length === 0 || loading}
          onClick={buildPlan}
          className="w-full bg-blue-600 text-white rounded py-2 disabled:opacity-50"
        >
          Plan Oluştur
        </button>
      </div>
    </>
  );
}
