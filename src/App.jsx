// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyPlans from "./pages/MyPlans";

// — Spor Planı —
import SportPlanType from "./pages/SportPlan/SportPlanType";
import SportBasicPlan from "./pages/SportPlan/SportBasicPlan";
import SportPremiumPlan from "./pages/SportPlan/SportPremiumPlan";
import SportCalendar from "./pages/SportPlan/SportCalendar";

// — Düğün Planı —
import WeddingPlanType from "./pages/WeddingPlan/WeddingPlanType";
import WeddingBasicPlan from "./pages/WeddingPlan/WeddingBasicPlan";
import WeddingPlanSetup from "./pages/WeddingPlan/WeddingPlanSetup";
import WeddingCalendar from "./pages/WeddingPlan/WeddingCalendar";
import MonthlyTaskView from "./pages/WeddingPlan/MonthlyTaskView";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Ana Sayfa */}
        <Route path="/" element={<Home />} />

        {/* Planlarım */}
        <Route path="/my-plans" element={<MyPlans />} />

        {/* Spor Planı */}
        <Route path="/sport-plan-type" element={<SportPlanType />} />
        <Route path="/sport-basic" element={<SportBasicPlan />} />
        <Route path="/sport-premium" element={<SportPremiumPlan />} />
        <Route path="/sport-calendar" element={<SportCalendar />} />

        {/* Düğün Planı */}
        <Route path="/wedding-plan-type" element={<WeddingPlanType />} />
        <Route path="/wedding-basic" element={<WeddingBasicPlan />} />
        <Route path="/wedding-setup" element={<WeddingPlanSetup />} />
        <Route path="/wedding-calendar" element={<WeddingCalendar />} />
        <Route
          path="/wedding-calendar/:year/:month"
          element={<MonthlyTaskView />}
        />
      </Routes>
    </Router>
  );
}

export default App;
