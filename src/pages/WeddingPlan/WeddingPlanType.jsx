import { useNavigate } from "react-router-dom";

const WeddingPlanType = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Düğün Planı Oluştur</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Temel Plan */}
        <div
          onClick={() => navigate("/wedding-basic")}
          className="cursor-pointer border border-pink-300 rounded-lg p-8 text-center hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Temel Plan</h2>
          <p className="text-gray-600">
            Otomatik olarak öntanımlı görevlerle hızlıca plan oluştur.
          </p>
        </div>

        {/* Özelleştirilmiş Plan */}
        <div
          onClick={() => navigate("/wedding-setup")}
          className="cursor-pointer border border-pink-300 rounded-lg p-8 text-center hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Özelleştirilmiş Plan</h2>
          <p className="text-gray-600">
            Görevleri seçerek, başlangıç–bitiş tarihlerini belirleyerek plan oluştur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeddingPlanType;
