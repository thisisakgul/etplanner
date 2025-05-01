/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: "#F4C2C2",
        pastelBlue: "#ADD8E6",
        pastelGreen: "#B5EAD7",
        beige: "#f5f5dc",
        // Günlük gökyüzü tonları:
        'day-bg': '#E8F7FF',       // gündüz çok açık mavi
        'night-bg': '#0d1b2a'      // gece koyu mavi
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
