import { useLocation } from "react-router-dom";
import MonthBox from "../../components/WeddingPlan/MonthBox";

const WeddingCalendar = () => {
  const location = useLocation();
  const { tasks = [], startDate, endDate } = location.state || {};

  // Yardımcı: Başlangıç ve bitiş arasında tüm ayları bul
  const getMonthRange = (start, end) => {
    const startDate = new Date(start);
    const endDateObj = new Date(end);
    const months = [];

    let current = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
    while (current <= endDateObj) {
      const year = current.getFullYear();
      const month = current.getMonth();
      months.push({ month, year });
      current = new Date(year, month + 1, 1);
    }

    return months;
  };

  const monthList = getMonthRange(startDate, endDate);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">📆 Düğün Takvimi</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {monthList.map(({ month, year }, index) => (
          <MonthBox key={index} month={month} year={year} />
        ))}
      </div>
    </div>
  );
};

export default WeddingCalendar;
