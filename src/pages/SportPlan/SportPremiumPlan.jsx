// src/pages/SportPlan/SportPremiumPlan.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import Spinner from '../../components/Spinner';

const programs = {
  fatLoss: [
  {
  day: '1. GÜN',
  modality: 'Circuit',
  exercises: [
  { name: 'Jumping Jacks', sets: 4, reps: 20 },
  { name: 'High Knees', sets: 4, reps: 20 },
  { name: 'Burpees', sets: 4, reps: 15 },
  { name: 'Mountain Climbers', sets: 4, reps: 25 },
  { name: 'Jump Rope', sets: 4, reps: 60, unit: 'sn' },
  { name: 'Butt Kicks', sets: 4, reps: 25 },
  { name: 'Tuck Jumps', sets: 4, reps: 15 },
  ],
  },
  {
  day: '2. GÜN',
  modality: 'HIIT',
  exercises: [
  { name: 'Sprint', sets: 10, reps: 30, unit: 'sn' },
  { name: 'Yavaş Yürüyüş', sets: 10, reps: 90, unit: 'sn' },
  ],
  },
  {
  day: '3. GÜN',
  modality: 'Strength',
  exercises: [
  { name: 'Back Squat', sets: 4, reps: 8 },
  { name: 'Deadlift', sets: 4, reps: 6 },
  { name: 'Walking Lunge', sets: 3, reps: 12 },
  { name: 'Leg Press', sets: 3, reps: 10 },
  { name: 'Calf Raise', sets: 3, reps: 15 },
  { name: 'Glute Bridge', sets: 3, reps: 12 },
  ],
  },
  {
  day: '4. GÜN',
  modality: 'Tabata & Core',
  exercises: [
  { name: 'Tabata Jump Rope', sets: 4, reps: 20, unit: 'sn' },
  { name: 'Tabata Rest', sets: 4, reps: 10, unit: 'sn' },
  { name: 'Crunch', sets: 3, reps: 20 },
  { name: 'Leg Raise', sets: 3, reps: 15 },
  { name: 'Russian Twist', sets: 3, reps: 20 },
  ],
  },
  {
  day: '5. GÜN',
  modality: 'Upper Endurance',
  exercises: [
  { name: 'Push-up', sets: 4, reps: 20 },
  { name: 'Cable Row', sets: 4, reps: 15 },
  { name: 'Dumbbell Fly', sets: 3, reps: 12 },
  { name: 'Tricep Push-down', sets: 3, reps: 20 },
  { name: 'Bicep Curl', sets: 3, reps: 15 },
  { name: 'Plank', sets: 3, reps: 60, unit: 'sn' },
  ],
  },
  {
  day: '6. GÜN',
  modality: 'LISS + Mobility',
  exercises: [
  { name: 'Tempolu Yürüyüş', sets: 1, reps: 45, unit: 'dk' },
  { name: 'Hamstring Stretch', sets: 1, reps: 30, unit: 'sn' },
  { name: 'Hip Flexor Stretch',sets: 1, reps: 30, unit: 'sn' },
  { name: 'Shoulder Mobility', sets: 1, reps: 30, unit: 'sn' },
  ],
  },
  {
  day: '7. GÜN',
  modality: 'Active Rest',
  exercises: [
  { name: 'Yoga Akışı', sets: 1, reps: 30, unit: 'dk' },
  { name: 'Foam-roll', sets: 1, reps: 20, unit: 'dk' },
  { name: 'Hafif Bisiklet', sets: 1, reps: 20, unit: 'dk' },
  ],
  },
  ],
  weightGain: [
  {
  day: '1. GÜN',
  modality: 'Lower Strength',
  exercises: [
  { name: 'Squat', sets: 5, reps: 5 },
  { name: 'Deadlift', sets: 4, reps: 5 },
  { name: 'Leg Press', sets: 4, reps: 8 },
  { name: 'Calf Raise', sets: 4, reps: 12 },
  { name: 'Glute Bridge', sets: 3, reps: 12 },
  { name: 'Ab Rollout', sets: 3, reps: 10 },
  ],
  },
  {
  day: '2. GÜN',
  modality: 'Upper Strength',
  exercises: [
  { name: 'Bench Press', sets: 5, reps: 5 },
  { name: 'Overhead Press', sets: 4, reps: 6 },
  { name: 'Pull-up', sets: 4, reps: 6 },
  { name: 'Dumbbell Row', sets: 4, reps: 8 },
  { name: 'Dips', sets: 3, reps: 8 },
  { name: 'Face Pull', sets: 3, reps: 15 },
  ],
  },
  {
  day: '3. GÜN',
  modality: 'Active Rest',
  exercises: [
  { name: 'Hafif Bisiklet', sets: 1, reps: 20, unit: 'dk' },
  { name: 'Yoga', sets: 1, reps: 30, unit: 'dk' },
  { name: 'Foam-roll', sets: 1, reps: 20, unit: 'dk' },
  ],
  },
  {
  day: '4. GÜN',
  modality: 'Lower Hypertrophy',
  exercises: [
  { name: 'Front Squat', sets: 4, reps: 8 },
  { name: 'Romanian Deadlift',sets: 4, reps: 8 },
  { name: 'Lunges', sets: 3, reps: 12 },
  { name: 'Leg Curl', sets: 3, reps: 15 },
  { name: 'Calf Raise', sets: 4, reps: 12 },
  { name: 'Goblet Squat', sets: 3, reps: 12 },
  ],
  },
  {
  day: '5. GÜN',
  modality: 'Upper Hypertrophy',
  exercises: [
  { name: 'Incline DB Press', sets: 4, reps: 10 },
  { name: 'Lat Pulldown', sets: 4, reps: 10 },
  { name: 'Cable Row', sets: 4, reps: 12 },
  { name: 'Lateral Raise', sets: 4, reps: 12 },
  { name: 'Bicep Curl', sets: 3, reps: 15 },
  { name: 'Tricep Push-down', sets: 3, reps: 15 },
  ],
  },
  {
  day: '6. GÜN',
  modality: 'Cardio & Core',
  exercises: [
  { name: 'Stationary Bike', sets: 1, reps: 20, unit: 'dk' },
  { name: 'Plank', sets: 3, reps: 60, unit: 'sn' },
  { name: 'Russian Twist', sets: 3, reps: 20 },
  { name: 'Leg Raise', sets: 3, reps: 15 },
  { name: 'Ab Wheel', sets: 3, reps: 12 },
  ],
  },
  {
  day: '7. GÜN',
  modality: 'Active Rest',
  exercises: [
  { name: 'Light Walk', sets: 1, reps: 20, unit: 'dk' },
  { name: 'Stretching', sets: 1, reps: 30, unit: 'dk' },
  { name: 'Yoga', sets: 1, reps: 30, unit: 'dk' },
  ],
  },
  ],
  hypertrophy: [
  {
  day: '1. GÜN',
  modality: 'Chest & Triceps',
  exercises: [
  { name: 'Bench Press', sets: 5, reps: 6 },
  { name: 'Incline DB Press', sets: 4, reps: 8 },
  { name: 'Dips', sets: 4, reps: 8 },
  { name: 'Cable Fly', sets: 4, reps: 10 },
  { name: 'Tricep Push-down', sets: 3, reps: 12 },
  { name: 'Push-up', sets: 3, reps: 15 },
  ],
  },
  {
  day: '2. GÜN',
  modality: 'Back & Biceps',
  exercises: [
  { name: 'Deadlift', sets: 5, reps: 5 },
  { name: 'Barbell Row', sets: 4, reps: 8 },
  { name: 'Pull-up', sets: 4, reps: 6 },
  { name: 'Face Pull', sets: 3, reps: 15 },
  { name: 'Barbell Curl', sets: 3, reps: 12 },
  ],
  },
  {
  day: '3. GÜN',
  modality: 'Legs',
  exercises: [
  { name: 'Squat', sets: 5, reps: 5 },
  { name: 'Leg Press', sets: 4, reps: 8 },
  { name: 'Leg Curl', sets: 4, reps: 10 },
  { name: 'Calf Raise', sets: 4, reps: 12 },
  ],
  },
  {
  day: '4. GÜN',
  modality: 'Shoulders & Core',
  exercises: [
  { name: 'Overhead Press', sets: 5, reps: 6 },
  { name: 'Lateral Raise', sets: 4, reps: 12 },
  { name: 'Front Raise', sets: 3, reps: 12 },
  { name: 'Hanging Leg Raise',sets: 3, reps: 15 },
  { name: 'Plank', sets: 3, reps: 60, unit: 'sn' },
  ],
  },
  {
  day: '5. GÜN',
  modality: 'Arms & Isolation',
  exercises: [
  { name: 'Barbell Curl', sets: 4, reps: 10 },
  { name: 'Hammer Curl', sets: 4, reps: 10 },
  { name: 'Skull Crushers', sets: 3, reps: 10 },
  { name: 'Tricep Extension', sets: 3, reps: 12 },
  ],
  },
  {
  day: '6. GÜN',
  modality: 'Power & Plyo',
  exercises: [
  { name: 'Power Clean', sets: 5, reps: 3 },
  { name: 'Box Jump', sets: 4, reps: 6 },
  { name: 'Medicine Ball Slam',sets: 4, reps: 10 },
  ],
  },
  {
  day: '7. GÜN',
  modality: 'Rest / Mobility',
  exercises: [
  { name: 'Yoga', sets: 1, reps: 30, unit: 'dk' },
  { name: 'Foam-roll', sets: 1, reps: 20, unit: 'dk' },
  { name: 'Stretching', sets: 1, reps: 30, unit: 'dk' },
  ],
  },
  ],
  recomp: [
  {
  day: '1. GÜN',
  modality: 'Push Hypertrophy',
  exercises: [
  { name: 'Bench Press', sets: 5, reps: 8 },
  { name: 'Incline DB Press', sets: 4, reps: 10 },
  { name: 'Overhead Press', sets: 4, reps: 10 },
  { name: 'Dips', sets: 3, reps: 12 },
  { name: 'Lateral Raise', sets: 3, reps: 15 },
  { name: 'Push-up', sets: 3, reps: 15 },
  { name: 'Tricep Extension', sets: 3, reps: 12 },
  { name: 'Plank', sets: 3, reps: 60, unit: 'sn' },
  ],
  },
  {
  day: '2. GÜN',
  modality: 'Pull Hypertrophy',
  exercises: [
  { name: 'Pull-up', sets: 4, reps: 8 },
  { name: 'Barbell Row', sets: 4, reps: 8 },
  { name: 'Seated Row', sets: 4, reps: 10 },
  { name: 'Face Pull', sets: 3, reps: 15 },
  { name: 'Hammer Curl', sets: 3, reps: 12 },
  { name: 'Preacher Curl', sets: 3, reps: 10 },
  { name: 'Dead Hang', sets: 3, reps: 30, unit: 'sn' },
  { name: 'Renegade Row', sets: 3, reps: 12 },
  ],
  },
  {
  day: '3. GÜN',
  modality: 'HIIT + Core',
  exercises: [
  { name: 'Burpee Sprint', sets: 10, reps: 30, unit: 'sn' },
  { name: 'Burpee Rest', sets: 10, reps: 30, unit: 'sn' },
  { name: 'Bicycle Crunch', sets: 4, reps: 20 },
  { name: 'Leg Raise', sets: 4, reps: 15 },
  { name: 'Russian Twist', sets: 4, reps: 20 },
  { name: 'Mountain Climbers', sets: 3, reps: 30, unit: 'sn' },
  ],
  },
  {
  day: '4. GÜN',
  modality: 'Legs Hypertrophy',
  exercises: [
  { name: 'Squat', sets: 5, reps: 8 },
  { name: 'Leg Press', sets: 4, reps: 10 },
  { name: 'Romanian Deadlift', sets: 4, reps: 8 },
  { name: 'Lunge', sets: 3, reps: 12 },
  { name: 'Hamstring Curl', sets: 3, reps: 15 },
  { name: 'Calf Raise', sets: 4, reps: 15 },
  { name: 'Glute Bridge', sets: 3, reps: 15 },
  { name: 'Step-up', sets: 3, reps: 10 },
  ],
  },
  {
  day: '5. GÜN',
  modality: 'Full-Body Strength',
  exercises: [
  { name: 'Deadlift', sets: 5, reps: 5 },
  { name: 'Bench Press', sets: 5, reps: 5 },
  { name: 'Back Squat', sets: 4, reps: 6 },
  { name: 'Pull-up', sets: 4, reps: 8 },
  { name: 'Overhead Press', sets: 4, reps: 6 },
  { name: 'Barbell Row', sets: 4, reps: 8 },
  { name: 'Plank', sets: 3, reps: 60, unit: 'sn' },
  { name: 'Farmer’s Walk', sets: 3, reps: 45, unit: 'sn' },
  ],
  },
  {
  day: '6. GÜN',
  modality: 'Cardio Mix',
  exercises: [
  { name: 'Bisiklet', sets: 1, reps: 30, unit: 'dk' },
  { name: 'Koşu', sets: 1, reps: 15, unit: 'dk' },
  { name: 'Kürek', sets: 1, reps: 15, unit: 'dk' },
  { name: 'Jump Rope', sets: 3, reps: 60, unit: 'sn' },
  { name: 'Burpees', sets: 3, reps: 12 },
  { name: 'Mountain Climbers', sets: 3, reps: 30, unit: 'sn' },
  ],
  },
  {
  day: '7. GÜN',
  modality: 'Rest & Stretch',
  exercises: [
  { name: 'Full-Body Stretch', sets: 1, reps: 30, unit: 'dk' },
  { name: 'Yoga', sets: 1, reps: 30, unit: 'dk' },
  { name: 'Foam-roll', sets: 1, reps: 20, unit: 'dk' },
  { name: 'Light Walk', sets: 1, reps: 20, unit: 'dk' },
  ],
  },
  ],
  };

export default function SportPremiumPlan() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bodyFat, setBodyFat] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [profile, setProfile] = useState('');
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  function determineProfile() {
    const bf = parseFloat(bodyFat) || 0;
    if (bf === 0) return 'recomp';
    if (bf >= 25) return 'fatLoss';
    if (bf < 15) return 'weightGain';
    return 'hypertrophy';
  }

  const handleSubmit = e => {
    e.preventDefault();
    const prof = determineProfile();
    setProfile(prof);
    setSubmitted(true);
    setLoading(true);

    const planData = {
      weight,
      height,
      bodyFat,
      profile: prof,
      program: programs[prof],
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('sportPremiumPlan', JSON.stringify(planData));

    setTimeout(() => {
      setLoading(false);
      addToast('Premium spor planı oluşturuldu', 'success');
      navigate('/sports/calendar', { state: { plan: planData } });
    }, 500);
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="max-w-screen-md mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Premium Spor Planı — Kişisel Bilgiler
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block mb-1 font-medium">Kilo (kg)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">⚖️</span>
                  <input
                    type="number"
                    min="0"
                    required
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                    placeholder="75"
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Boy (cm)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">📏</span>
                  <input
                    type="number"
                    min="0"
                    required
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                    placeholder="180"
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Yağ Oranı (%)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">🧪</span>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={bodyFat}
                    onChange={e => setBodyFat(e.target.value)}
                    className="w-full pl-10 pr-3 py-2"
                  />
                </div>
                <div className="mt-1 text-sm text-gray-600 flex items-center">
                  <span>{bodyFat || 0}%</span>
                  <button
                    type="button"
                    className="ml-2 text-blue-600 hover:underline transition"
                    title="Yağ oranınızı bilmiyorsanız bu bağlantıdan ölçün"
                    onClick={() =>
                      window.open(
                        'https://www.agirsaglam.com/vucut-yag-orani-hesaplama/',
                        '_blank'
                      )
                    }
                  >
                    Nasıl Ölçülür?
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition disabled:opacity-50"
            >
              Planı Kaydet &amp; Takvime Git
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-4">
              Seçilen Profil:{' '}
              {profile === 'fatLoss'
                ? 'Yağ Yakma'
                : profile === 'weightGain'
                ? 'Kilo Alma'
                : profile === 'recomp'
                ? 'Rekomp'
                : 'Kas Hacim'}
            </h3>

            {programs[profile].map((p, i) => (
              <div key={i} className="border rounded-lg p-4 bg-gray-50">
                <h4 className="font-bold mb-2">
                  {p.day} — {p.modality}
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {p.exercises.map((ex, j) => (
                    <li key={j}>
                      {ex.name} — {ex.sets}×{ex.reps}
                      {ex.unit ? ` ${ex.unit}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
