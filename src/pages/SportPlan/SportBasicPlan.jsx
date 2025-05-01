// src/pages/SportPlan/SportBasicPlan.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import Spinner from '../../components/Spinner';

const goals = ['Kilo Kaybı', 'Kilo Alma', 'Kas Kazanımı'];
const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

const programs = {
  'Kilo Kaybı': {
    Pazartesi: [
      { name: 'Jumping Jacks', sets: 4, reps: 20 },
      { name: 'High Knees', sets: 4, reps: 20 },
      { name: 'Burpees', sets: 4, reps: 15 },
      { name: 'Mountain Climbers', sets: 4, reps: 25 },
      { name: 'Jump Rope', sets: 4, reps: 60 },
      { name: 'Butt Kicks', sets: 4, reps: 25 },
      { name: 'Tuck Jumps', sets: 3, reps: 15 },
    ],
    Salı: [
      { name: 'Burpees', sets: 4, reps: 15 },
      { name: 'Jump Rope', sets: 4, reps: 60 },
      { name: 'High Knees', sets: 4, reps: 20 },
      { name: 'Butt Kicks', sets: 4, reps: 25 },
      { name: 'Plank Jacks', sets: 4, reps: 30 },
      { name: 'Skater Hops', sets: 3, reps: 20 },
      { name: 'Squat Jumps', sets: 3, reps: 15 },
    ],
    Çarşamba: [
      { name: 'Mountain Climbers', sets: 4, reps: 25 },
      { name: 'Jumping Jacks', sets: 4, reps: 20 },
      { name: 'Burpees', sets: 4, reps: 15 },
      { name: 'High Knees', sets: 4, reps: 20 },
      { name: 'Tuck Jumps', sets: 4, reps: 15 },
      { name: 'Butt Kicks', sets: 4, reps: 25 },
      { name: 'Jump Rope', sets: 4, reps: 60 },
    ],
    Perşembe: [
      { name: 'Burpees', sets: 4, reps: 15 },
      { name: 'Squat Jumps', sets: 4, reps: 15 },
      { name: 'Mountain Climbers', sets: 4, reps: 25 },
      { name: 'Plank Jacks', sets: 4, reps: 30 },
      { name: 'High Knees', sets: 4, reps: 20 },
      { name: 'Jump Rope', sets: 4, reps: 60 },
      { name: 'Butt Kicks', sets: 4, reps: 25 },
    ],
    Cuma: [
      { name: 'Jumping Jacks', sets: 4, reps: 20 },
      { name: 'Burpees', sets: 4, reps: 15 },
      { name: 'High Knees', sets: 4, reps: 20 },
      { name: 'Mountain Climbers', sets: 4, reps: 25 },
      { name: 'Tuck Jumps', sets: 4, reps: 15 },
      { name: 'Jump Rope', sets: 4, reps: 60 },
      { name: 'Squat Jumps', sets: 3, reps: 15 },
    ],
    Cumartesi: [
      { name: 'Burpees', sets: 4, reps: 15 },
      { name: 'Jumping Jacks', sets: 4, reps: 20 },
      { name: 'High Knees', sets: 4, reps: 20 },
      { name: 'Mountain Climbers', sets: 4, reps: 25 },
      { name: 'Butt Kicks', sets: 4, reps: 25 },
      { name: 'Plank Jacks', sets: 4, reps: 30 },
      { name: 'Jump Rope', sets: 4, reps: 60 },
    ],
    Pazar: [
      { name: 'Tuck Jumps', sets: 4, reps: 15 },
      { name: 'Squat Jumps', sets: 4, reps: 15 },
      { name: 'Burpees', sets: 4, reps: 15 },
      { name: 'High Knees', sets: 4, reps: 20 },
      { name: 'Jumping Jacks', sets: 4, reps: 20 },
      { name: 'Mountain Climbers', sets: 4, reps: 25 },
      { name: 'Butt Kicks', sets: 4, reps: 25 },
    ],
  },
  'Kilo Alma': {
    Pazartesi: [
      { name: 'Squat', sets: 5, reps: 8 },
      { name: 'Deadlift', sets: 4, reps: 6 },
      { name: 'Walking Lunges', sets: 4, reps: 10 },
      { name: 'Leg Press', sets: 4, reps: 10 },
      { name: 'Calf Raise', sets: 4, reps: 12 },
      { name: 'Hip Thrust', sets: 3, reps: 12 },
      { name: 'Goblet Squat', sets: 3, reps: 10 },
    ],
    Salı: [
      { name: 'Bench Press', sets: 5, reps: 8 },
      { name: 'Incline DB Press', sets: 4, reps: 10 },
      { name: 'Chest Fly', sets: 4, reps: 12 },
      { name: 'Dips', sets: 3, reps: 12 },
      { name: 'Push-Up', sets: 3, reps: 15 },
      { name: 'Tricep Pushdown', sets: 4, reps: 12 },
      { name: 'Overhead Press', sets: 3, reps: 10 },
    ],
    Çarşamba: [
      { name: 'Deadlift', sets: 4, reps: 6 },
      { name: 'Barbell Row', sets: 4, reps: 8 },
      { name: 'Pull-Up', sets: 4, reps: 8 },
      { name: 'Lat Pulldown', sets: 4, reps: 10 },
      { name: 'Seated Row', sets: 4, reps: 10 },
      { name: 'Face Pull', sets: 3, reps: 12 },
      { name: 'Hammer Curl', sets: 3, reps: 12 },
    ],
    Perşembe: [
      { name: 'Squat', sets: 5, reps: 8 },
      { name: 'Leg Press', sets: 4, reps: 10 },
      { name: 'Hamstring Curl', sets: 4, reps: 12 },
      { name: 'Calf Raise', sets: 4, reps: 12 },
      { name: 'Walking Lunges', sets: 3, reps: 12 },
      { name: 'Step-Up', sets: 3, reps: 10 },
      { name: 'Glute Bridge', sets: 3, reps: 15 },
    ],
    Cuma: [
      { name: 'Bench Press', sets: 4, reps: 8 },
      { name: 'Incline DB Press', sets: 4, reps: 10 },
      { name: 'Chest Fly', sets: 4, reps: 12 },
      { name: 'Push-Up', sets: 3, reps: 15 },
      { name: 'Tricep Dip', sets: 3, reps: 12 },
      { name: 'Overhead Press', sets: 3, reps: 10 },
      { name: 'Lateral Raise', sets: 3, reps: 12 },
    ],
    Cumartesi: [
      { name: 'Deadlift', sets: 4, reps: 6 },
      { name: 'Barbell Row', sets: 4, reps: 8 },
      { name: 'Pull-Up', sets: 4, reps: 8 },
      { name: 'Lat Pulldown', sets: 4, reps: 10 },
      { name: 'Seated Row', sets: 4, reps: 10 },
      { name: 'Face Pull', sets: 3, reps: 12 },
      { name: 'Bicep Curl', sets: 3, reps: 12 },
    ],
    Pazar: [
      { name: 'Rest Day', sets: 0, reps: 0 },
      { name: 'Light Cardio', sets: 1, reps: 30 },
    ],
  },
  'Kas Kazanımı': {
    Pazartesi: [
      { name: 'Bench Press', sets: 5, reps: 6 },
      { name: 'Incline Press', sets: 4, reps: 8 },
      { name: 'Dips', sets: 4, reps: 8 },
      { name: 'Push-Up', sets: 4, reps: 12 },
      { name: 'Chest Fly', sets: 3, reps: 12 },
      { name: 'Cable Crossover', sets: 3, reps: 12 },
      { name: 'Tricep Extension', sets: 3, reps: 12 },
    ],
    Salı: [
      { name: 'Deadlift', sets: 5, reps: 5 },
      { name: 'Pull-Up', sets: 4, reps: 6 },
      { name: 'Barbell Row', sets: 4, reps: 8 },
      { name: 'Face Pull', sets: 3, reps: 15 },
      { name: 'Barbell Curl', sets: 3, reps: 12 },
      { name: 'Hammer Curl', sets: 3, reps: 12 },
      { name: 'Preacher Curl', sets: 3, reps: 10 },
    ],
    Çarşamba: [
      { name: 'Squat', sets: 5, reps: 5 },
      { name: 'Front Squat', sets: 4, reps: 6 },
      { name: 'Leg Press', sets: 4, reps: 8 },
      { name: 'Leg Curl', sets: 4, reps: 10 },
      { name: 'Calf Raise', sets: 4, reps: 12 },
      { name: 'Walking Lunges', sets: 3, reps: 12 },
      { name: 'Glute Bridge', sets: 3, reps: 15 },
    ],
    Perşembe: [
      { name: 'Overhead Press', sets: 5, reps: 6 },
      { name: 'Arnold Press', sets: 4, reps: 8 },
      { name: 'Lateral Raise', sets: 4, reps: 12 },
      { name: 'Front Raise', sets: 3, reps: 12 },
      { name: 'Shrugs', sets: 3, reps: 12 },
      { name: 'Hanging Leg Raise', sets: 3, reps: 15 },
      { name: 'Russian Twist', sets: 3, reps: 20 },
    ],
    Cuma: [
      { name: 'Deadlift', sets: 4, reps: 5 },
      { name: 'Romanian Deadlift', sets: 4, reps: 8 },
      { name: 'Hyperextension', sets: 4, reps: 12 },
      { name: 'Good Morning', sets: 3, reps: 10 },
      { name: 'Cable Row', sets: 3, reps: 12 },
      { name: 'Back Extension', sets: 3, reps: 15 },
      { name: 'Pull-Through', sets: 3, reps: 12 },
    ],
    Cumartesi: [
      { name: 'Barbell Curl', sets: 4, reps: 10 },
      { name: 'Hammer Curl', sets: 4, reps: 10 },
      { name: 'Preacher Curl', sets: 4, reps: 10 },
      { name: 'Concentration Curl', sets: 3, reps: 12 },
      { name: 'Reverse Curl', sets: 3, reps: 12 },
      { name: 'Wrist Curl', sets: 3, reps: 15 },
      { name: 'Farmer’s Walk', sets: 3, reps: 30 },
    ],
    Pazar: [
      { name: 'Rest Day', sets: 0, reps: 0 },
      { name: 'Stretch & Mobility', sets: 1, reps: 30 },
    ],
  },
};

export default function SportBasicPlan() {
  const [goal, setGoal] = useState(null);
  const [day, setDay] = useState(null);
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleCreateBasic = () => {
    setLoading(true);
    const planData = {
      goal,
      program: programs[goal],
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('sportBasicPlan', JSON.stringify(planData));
    setTimeout(() => {
      setLoading(false);
      addToast('Basic spor planı oluşturuldu', 'success');
      navigate('/sports/calendar', { state: { plan: planData } });
    }, 500);
  };

  if (!goal) {
    return (
      <div className="max-w-screen-md mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Basic Plan Hedef Seçimi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {goals.map(g => (
            <button
              key={g}
              onClick={() => { setGoal(g); setDay(null); }}
              className="p-4 border rounded hover:bg-gray-100"
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {loading && <Spinner />}
      <div className="max-w-screen-md mx-auto p-6">
        <h2 className="text-xl font-semibold mb-3 text-center">{goal} Programı</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {days.map(d => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className="p-3 border rounded hover:shadow-sm"
            >
              {d}
            </button>
          ))}
        </div>

        {day && (
          <div className="bg-white p-4 border rounded shadow space-y-4">
            <h3 className="font-semibold mb-2">{day} Egzersizleri</h3>
            <ul className="list-disc pl-5 space-y-1">
              {programs[goal][day].map((ex, i) => (
                <li key={i}>
                  {ex.name}
                  {ex.sets > 0 && ex.reps > 0 && (
                    <span> — {ex.sets}×{ex.reps}{ex.reps === 60 && ' sn'}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <button
                onClick={() => setDay(null)}
                className="text-sm text-blue-600 hover:underline"
              >
                Geri
              </button>
              <button
                onClick={handleCreateBasic}
                disabled={loading}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition disabled:opacity-50"
              >
                Planı Kaydet & Takvime Git
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
