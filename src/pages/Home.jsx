// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import PlanCard from "../components/PlanCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="mt-6 px-2 w-full flex justify-center">
      <div className="w-full max-w-[1150px] bg-white dark:bg-gray-900 rounded-[3rem] pt-14 pb-20 shadow-inner relative animate-fade-in">
        <div className="relative mt-6 flex justify-center items-end h-[1000px]">
          {/* Düğün Kartı */}
          <div className="absolute left-1/2 -translate-x-[470px] top-24 z-30">
            <PlanCard
              title="Düğün Planlaması"
              description="Tüm görevleri takvime yerleştir, stresi azalt."
              width="w-[24rem]"
              height="h-[520px]"
              hoverTranslate="hover:-translate-y-16"
              bgColor="bg-pastelPink"
              darkBgColor="dark:bg-pastelPink"
              onClick={() => navigate("/wedding-plan-type")}
            />
          </div>

          {/* Spor Kartı */}
          <div className="absolute left-1/2 -translate-x-[225px] top-32 z-20">
            <PlanCard
              title="Spor Programı"
              description="Hedeflerine göre haftalık program oluştur."
              width="w-[24rem]"
              height="h-[520px]"
              hoverTranslate="hover:-translate-y-44"
              bgColor="bg-pastelBlue"
              darkBgColor="dark:bg-pastelBlue"
              onClick={() => navigate("/sports")}
            />
          </div>

          {/* Ders Kartı */}
          <div className="absolute left-1/2 translate-x-[20px] top-40 z-10">
            <PlanCard
              title="Ders Programı"
              description="Verimli bir ders planı oluştur."
              width="w-[24rem]"
              height="h-[520px]"
              hoverTranslate="hover:-translate-y-40"
              bgColor="bg-pastelGreen"
              darkBgColor="dark:bg-pastelGreen"
              onClick={() => navigate("/lesson-plan")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
