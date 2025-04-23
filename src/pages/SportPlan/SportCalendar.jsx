import { useLocation } from "react-router-dom";

const days = ["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"];

export default function SportCalendar() {
  const { state } = useLocation();
  const { program = [], view } = state || {};

  if (!program.length) {
    return <p className="p-6">Gösterilecek program yok.</p>;
  }

  if (view === "weekly") {
    return (
      <div className="max-w-screen-lg mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Haftalık Program</h1>
        <div className="grid grid-cols-7 gap-2 text-center font-medium mb-2">
          {days.map(d => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {program.map((task, i) => (
            <div
              key={i}
              className="p-3 border rounded min-h-[100px] bg-blue-50"
            >
              {task}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // monthly
  const weeks = [];
  for (let i = 0; i < program.length; i += 7) {
    weeks.push(program.slice(i, i + 7));
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Aylık Program</h1>
      {weeks.map((week, wi) => (
        <div key={wi} className="mb-6">
          <h2 className="font-semibold mb-2">{wi + 1}. Hafta</h2>
          <div className="grid grid-cols-7 gap-2">
            {week.map((task, ti) => (
              <div
                key={ti}
                className="p-3 border rounded min-h-[100px] bg-green-50"
              >
                {task}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
