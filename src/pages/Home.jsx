import { useNavigate } from "react-router-dom";
import PlanCard from "../components/PlanCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 px-2 w-full flex justify-center"> {/* Çerçeveyi yukarı taşıdık */}
      <div className="w-full max-w-[1150px] bg-white rounded-[3rem] pt-14 pb-20 shadow-inner relative animate-fade-in">
        <div className="relative mt-6 flex justify-center items-end h-[1000px]">
          {/* Düğün Kartı */}
          <div className="absolute left-1/2 -translate-x-[470px] top-24 z-30">
            <PlanCard
              title="Düğün Planlaması"
              description="Düğün programını önceden planla. Tüm görevleri takvime yerleştir."
              width="w-[24rem]"
              height="h-[520px]"
              hoverTranslate="hover:-translate-y-16"
              bgColor="bg-[#F4C2C2]"
              onClick={() => navigate("/wedding-plan-type")}
            />
          </div>

          {/* Spor Kartı */}
          <div className="absolute left-1/2 -translate-x-[225px] top-32 z-20">
            <PlanCard
              title="Spor Programı"
              description="Antrenman saatlerini önceden belirle. Hedeflerine göre program oluştur."
              width="w-[24rem]"
              height="h-[520px]"
              hoverTranslate="hover:-translate-y-32"
              bgColor="bg-pastelBlue"
            />
          </div>

          {/* Ders Kartı */}
          <div className="absolute left-1/2 translate-x-[20px] top-40 z-10">
            <PlanCard
              title="Ders Programı"
              description="Ders çalışma zamanlarını ayarla. Verimli bir planla hedefe ulaş."
              width="w-[24rem]"
              height="h-[520px]"
              hoverTranslate="hover:-translate-y-32"
              bgColor="bg-pastelGreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
