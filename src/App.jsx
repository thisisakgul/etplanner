// src/App.jsx
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { ThemeContext } from './main.jsx';

// Auth & Subscribe
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Subscribe from './pages/Subscribe';
import Checkout from './pages/Checkout';

// Public Basic
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SportPlanType from './pages/SportPlan/SportPlanType';
import SportBasicPlan from './pages/SportPlan/SportBasicPlan';
import LessonPlanType from './pages/LessonPlan/LessonPlanType';
import LessonBasicPlan from './pages/LessonPlan/LessonBasicPlan';
import WeddingPlanType from './pages/WeddingPlan/WeddingPlanType';
import WeddingBasicPlan from './pages/WeddingPlan/WeddingBasicPlan';
import LessonCalendar from './pages/LessonPlan/LessonCalendar';

// Premium & MyPlans
import SportPremiumPlan from './pages/SportPlan/SportPremiumPlan';
import SportCalendar from './pages/SportPlan/SportCalendar';
import LessonPremiumPlan from './pages/LessonPlan/LessonPremiumPlan';
import WeddingPlanSetup from './pages/WeddingPlan/WeddingPlanSetup';
import WeddingCalendar from './pages/WeddingPlan/WeddingCalendar';
import MonthlyTaskView from './pages/WeddingPlan/MonthlyTaskView';
import MyPlans from './pages/MyPlans';

export default function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-blue-50'
      }`}
    >
      <Navbar />

      <main className="max-w-screen-xl mx-auto py-8 px-4">
        <Routes>
          {/* 📂 Public Basic */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 👤 Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 💳 Subscribe / Checkout */}
          <Route path="/subscribe" element={<Subscribe />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute requirePremium>
                <Checkout />
              </PrivateRoute>
            }
          />

          {/* 🆓 Basic Plans */}
          <Route path="/sports" element={<SportPlanType />} />
          <Route path="/sports/basic" element={<SportBasicPlan />} />
          <Route path="/lesson-plan" element={<LessonPlanType />} />
          <Route
            path="/lesson-plan/basic"
            element={<LessonBasicPlan />}
          />
          <Route
            path="/wedding-plan-type"
            element={<WeddingPlanType />}
          />
          <Route
            path="/wedding-basic"
            element={<WeddingBasicPlan />}
          />
          <Route
            path="/lesson-calendar"
            element={<LessonCalendar />}
          />

          {/* 🔒 Premium & MyPlans */}
          <Route
            path="/sports/premium"
            element={
              <PrivateRoute requirePremium>
                <SportPremiumPlan />
              </PrivateRoute>
            }
          />
          <Route
            path="/sports/calendar"
            element={
              <PrivateRoute requirePremium>
                <SportCalendar />
              </PrivateRoute>
            }
          />
          <Route
            path="/lesson-plan/premium"
            element={
              <PrivateRoute requirePremium>
                <LessonPremiumPlan />
              </PrivateRoute>
            }
          />
          <Route
            path="/lesson-plan/calendar"
            element={
              <PrivateRoute requirePremium>
                <LessonCalendar />
              </PrivateRoute>
            }
          />
          <Route
            path="/wedding-setup"
            element={
              <PrivateRoute requirePremium>
                <WeddingPlanSetup />
              </PrivateRoute>
            }
          />
          <Route
            path="/wedding-calendar"
            element={
              <PrivateRoute requirePremium>
                <WeddingCalendar />
              </PrivateRoute>
            }
          />
          <Route
            path="/wedding-calendar/:year/:month"
            element={
              <PrivateRoute requirePremium>
                <MonthlyTaskView />
              </PrivateRoute>
            }
          />
          <Route
            path="/myplans"
            element={
              <PrivateRoute>
                <MyPlans />
              </PrivateRoute>
            }
          />

          {/* 🚨 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
