import { useNavigate } from "react-router-dom";

export default function SportPlanType() {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Spor Planı Oluştur</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          onClick={() => navigate("/sport-basic")}
          className="cursor-pointer border border-blue-300 rounded-lg p-8 text-center hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Basic Plan</h2>
          <p className="text-gray-600">
            Kilo verme, kilo alma veya kas kazanımı için 7 günlük program.
          </p>
        </div>
        <div
          onClick={() => navigate("/sport-premium")}
          className="cursor-pointer border border-green-300 rounded-lg p-8 text-center hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Premium Plan</h2>
          <p className="text-gray-600">
            Boy, kilo, yağ oranı girin, BMI’ye göre 30 günlük detaylı program.
          </p>
        </div>
      </div>
    </div>
  );
}
