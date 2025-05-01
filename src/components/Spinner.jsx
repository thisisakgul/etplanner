// src/components/Spinner.jsx
import React from 'react';

export default function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-blue-600 border-dashed rounded-full animate-spin" />
    </div>
  );
}
