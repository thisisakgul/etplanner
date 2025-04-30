import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar            from './components/Navbar';
import Home              from './pages/Home';
import MyPlans           from './pages/MyPlans';

// — Spor Planı —
import SportPlanType     from './pages/SportPlan/SportPlanType';
import SportBasicPlan    from './pages/SportPlan/SportBasicPlan';
import SportPremiumPlan  from './pages/SportPlan/SportPremiumPlan';
import SportCalendar     from './pages/SportPlan/SportCalendar';

// — Düğün Planı —
import WeddingPlanType   from './pages/WeddingPlan/WeddingPlanType';
import WeddingBasicPlan  from './pages/WeddingPlan/WeddingBasicPlan';
import WeddingPlanSetup  from './pages/WeddingPlan/WeddingPlanSetup';
import WeddingCalendar   from './pages/WeddingPlan/WeddingCalendar';
import MonthlyTaskView   from './pages/WeddingPlan/MonthlyTaskView';

// — Ders Planı —
import LessonPlanType    from './pages/LessonPlan/LessonPlanType';
import LessonBasicPlan   from './pages/LessonPlan/LessonBasicPlan';
import LessonPremiumPlan from './pages/LessonPlan/LessonPremiumPlan';
import LessonCalendar    from './pages/LessonPlan/LessonCalendar';

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Ana Sayfa */}
        <Route path="/" element={<Home />} />

        {/* Planlarım */}
        <Route path="/my-plans" element={<MyPlans />} />

        {/* Spor Planı */}
        <Route path="/sports"          element={<SportPlanType    />} />
        <Route path="/sports/basic"    element={<SportBasicPlan   />} />
        <Route path="/sports/premium"  element={<SportPremiumPlan />} />
        <Route path="/sports/calendar" element={<SportCalendar    />} />

        {/* Düğün Planı */}
        <Route path="/wedding-plan-type"  element={<WeddingPlanType  />} />
        <Route path="/wedding-basic"      element={<WeddingBasicPlan />} />
        <Route path="/wedding-setup"      element={<WeddingPlanSetup />} />
        <Route path="/wedding-calendar"   element={<WeddingCalendar  />} />
        <Route
          path="/wedding-calendar/:year/:month"
          element={<MonthlyTaskView />}
        />

        {/* Ders Planı */}
        <Route path="/lesson-plan-type"   element={<LessonPlanType    />} />
        <Route path="/lesson-basic"       element={<LessonBasicPlan   />} />
        <Route path="/lesson-premium"     element={<LessonPremiumPlan />} />
        <Route path="/lesson-calendar"    element={<LessonCalendar    />} />

        {/* Bilinmeyen URL’ler → Anasayfa */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
