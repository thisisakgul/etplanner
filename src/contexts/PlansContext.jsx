import React, { createContext, useState, useEffect } from 'react';

export const PlansContext = createContext();

export function PlansProvider({ children }) {
  const [plans, setPlans] = useState([]);

  const loadPlans = () => {
    const loaded = [];
    Object.keys(localStorage).forEach(key => {
      if (
        key === 'lessonBasicPlan' ||
        key === 'lessonPremiumPlan' ||
        key === 'sportBasicPlan' ||
        key === 'sportPremiumPlan' ||
        key === 'weddingBasicPlan' ||
        key === 'weddingPremiumPlan'
      ) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          loaded.push({ key, ...data });
        } catch {}
      }
    });
    setPlans(loaded);
  };

  useEffect(loadPlans, []);

  return (
    <PlansContext.Provider value={{ plans, loadPlans }}>
      {children}
    </PlansContext.Provider>
  );
}
