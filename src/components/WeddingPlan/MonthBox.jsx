import { useNavigate } from "react-router-dom";

const MONTH_NAMES = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const MonthBox = ({ month, year }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Burada month 0–11 arası, URL’de 1–12 olarak göndereceğiz
    navigate(`/wedding-calendar/${year}/${month + 1}`);
  };

  return (
    <div
      onClick={handleClick}
      className="border border-pink-300 rounded-xl shadow-md p-4 bg-white hover:scale-105 transition cursor-pointer"
    >
      <h2 className="text-xl font-semibold text-center text-pink-700 mb-2">
        {MONTH_NAMES[month]} {year}
      </h2>
      <div className="w-full h-40 bg-[#F4C2C2]/30 rounded-lg flex items-center justify-center text-gray-500 text-sm">
        Haftalık görevleri görmek için tıkla
      </div>
    </div>
  );
};

export default MonthBox;
