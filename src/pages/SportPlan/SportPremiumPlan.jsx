import { useState } from "react";
import { useNavigate } from "react-router-dom";

const premiumPrograms = {
  lose: Array.from({ length: 30 }, (_,i) => `Gün ${i+1}: 45 dk kardiyo + esneme`),
  gain: Array.from({ length: 30 }, (_,i) => `Gün ${i+1}: Güç antremanı + yüksek kalorili atıştırma`),
  muscle: Array.from({ length: 30 }, (_,i) => `Gün ${i+1}: Split antremanı (göğüs, sırt, bacak...)`)
};

export default function SportPremiumPlan() {
  const [step, setStep] = useState(1);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [fat, setFat] = useState("");
  const [bmi, setBmi] = useState(null);
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  const computeBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    return (w / (h * h)).toFixed(1);
  };

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Premium Spor Planı</h1>

      {step === 1 && (
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Boy (cm)"
            value={height}
            onChange={e => setHeight(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="number"
            placeholder="Kilo (kg)"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="number"
            placeholder="Yağ Oranı (%)"
            value={fat}
            onChange={e => setFat(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <div className="text-center">
            <button
              disabled={!height||!weight||!fat}
              onClick={() => {
                setBmi(computeBMI());
                setStep(2);
              }}
              className={`px-6 py-2 rounded ${
                height&&weight&&fat
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Devam Et
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 text-center">
          <p>BMI: <strong>{bmi}</strong></p>
          <button
            onClick={() => setGoal("lose")}
            className={`w-full py-3 rounded border ${
              goal==="lose" ? "bg-green-200" : "hover:bg-green-50"
            }`}
          >
            Kilo Vermek
          </button>
          <button
            onClick={() => setGoal("gain")}
            className={`w-full py-3 rounded border ${
              goal==="gain" ? "bg-green-200" : "hover:bg-green-50"
            }`}
          >
            Kilo Almak
          </button>
          <button
            onClick={() => setGoal("muscle")}
            className={`w-full py-3 rounded border ${
              goal==="muscle" ? "bg-green-200" : "hover:bg-green-50"
            }`}
          >
            Kas Kazanımı
          </button>
          <div className="mt-4">
            <button
              disabled={!goal}
              onClick={() => {
                navigate("/sport-calendar", {
                  state: { program: premiumPrograms[goal], view: "monthly" }
                });
              }}
              className={`px-6 py-2 rounded ${
                goal
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Programı Görüntüle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
