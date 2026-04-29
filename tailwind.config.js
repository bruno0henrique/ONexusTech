/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070711',
        panel: '#0e0d1c',
        line: '#2c174e',
        nexus: '#9b5cff',
        glow: '#c16cff',
      },
      boxShadow: {
        violet: '0 0 70px rgba(126, 58, 242, 0.25)',
      },
    },
  },
  plugins: [],
};
