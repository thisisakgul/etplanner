import React from 'react';

export default function FeatureCard({ title, features, onClick, primary }) {
  return (
    <div
      onClick={onClick}
      className={`
        w-full h-full p-8 rounded-3xl shadow-lg cursor-pointer
        bg-white dark:bg-gray-800 transition-transform transform
        hover:scale-105
        ${primary
          ? 'border-2 border-indigo-500'
          : 'border border-gray-200 dark:border-gray-700'}
      `}
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
        {features.map((f, i) => (
          <li key={i} className="text-base">
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`
          w-full py-3 rounded-2xl font-semibold transition-colors
          ${primary
            ? 'bg-indigo-500 text-white hover:bg-indigo-600'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}
        `}
      >
        {primary ? 'Premium Planı' : 'Temel Plan'}
      </button>
    </div>
  );
}
