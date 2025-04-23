import { useState } from "react";
import { useNavigate } from "react-router-dom";

const basicPrograms = {
  lose: [
    "Pazartesi: 30 dk koşu",
    "Salı: 20 dk HIIT",
    "Çarşamba: Dinlenme",
    "Perşembe: 30 dk bisiklet",
    "Cuma: Vücüt ağırlığı kuvvet",
    "Cumartesi: 30 dk tempolu yürüyüş",
    "Pazar: Yoga esneme"
  ],
  gain: [
    "Pazartesi: Full body güç antremanı",
    "Salı: Dinlenme",
    "Çarşamba: Alt vücut kuvvet",
    "Perşembe: Üst vücut kuvvet",
    "Cuma: Core & sırt",
    "Cumartesi: Hafif kardiyo",
    "Pazar: Dinlenme"
  ],
  muscle: [
    "Pazartesi: Göğüs & triceps",
    "Salı: Sırt & biceps",
    "Çarşamba: Bacak & omuz",
    "Perşembe: Dinlenme",
    "Cuma: Full body hipertrofi",
    "Cumartesi: Kardiyo 20 dk",
    "Pazar: Core antremanı"
  ]
};

export default function SportBasicPlan() {
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Basic Spor Planı</h1>
      <div className="space-y-4">
        <button
          onClick={() => setGoal("lose")}
          className={`w-full py-3 rounded border ${
            goal==="lose" ? "bg-blue-200" : "hover:bg-blue-50"
          }`}
        >
          Kilo Vermek
        </button>
        <button
          onClick={() => setGoal("gain")}
          className={`w-full py-3 rounded border ${
            goal==="gain" ? "bg-blue-200" : "hover:bg-blue-50"
          }`}
        >
          Kilo Almak
        </button>
        <button
          onClick={() => setGoal("muscle")}
          className={`w-full py-3 rounded border ${
            goal==="muscle" ? "bg-blue-200" : "hover:bg-blue-50"
          }`}
        >
          Kas Kazanımı
        </button>
      </div>
      <div className="mt-6 text-center">
        <button
          disabled={!goal}
          onClick={() => {
            navigate("/sport-calendar", {
              state: { program: basicPrograms[goal], view: "weekly" }
            });
          }}
          className={`px-6 py-2 rounded font-medium transition ${
            goal ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Planı Görüntüle
        </button>
      </div>
    </div>
  );
}
