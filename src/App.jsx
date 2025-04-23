// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyPlans from "./pages/MyPlans";

// ——— Spor Planı Sayfaları ———
import SportPlanType    from "./pages/SportPlanType";
import SportBasicPlan   from "./pages/SportBasicPlan";
import SportPremiumPlan from "./pages/SportPremiumPlan";
import SportCalendar    from "./pages/SportCalendar";

// ——— Düğün Planı Sayfaları ———
import WeddingPlanType   from "./pages/WeddingPlan/WeddingPlanType";
import WeddingBasicPlan  from "./pages/WeddingPlan/WeddingBasicPlan";
import WeddingPlanSetup  from "./pages/WeddingPlan/WeddingPlanSetup";
import WeddingCalendar   from "./pages/WeddingPlan/WeddingCalendar";
import MonthlyTaskView   from "./pages/WeddingPlan/MonthlyTaskView";

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
        <Route path="/sport-basic"     element={<SportBasicPlan />} />
        <Route path="/sport-premium"   element={<SportPremiumPlan />} />
        <Route path="/sport-calendar"  element={<SportCalendar />} />

        {/* Düğün Planı */}
        <Route path="/wedding-plan-type"       element={<WeddingPlanType />} />
        <Route path="/wedding-basic"           element={<WeddingBasicPlan />} />
        <Route path="/wedding-setup"           element={<WeddingPlanSetup />} />
        <Route path="/wedding-calendar"        element={<WeddingCalendar />} />
        <Route path="/wedding-calendar/:year/:month" element={<MonthlyTaskView />} />

        {/* 404 veya başka yönlendirmeler eklenecekse buraya */}
      </Routes>
    </Router>
  );
}

export default App;
