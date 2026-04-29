/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#040812',
        panel: '#07101f',
        line: '#12385f',
        nexus: '#2f8cff',
        glow: '#5f7cff',
      },
      boxShadow: {
        violet: '0 0 70px rgba(47, 140, 255, 0.2)',
      },
    },
  },
  plugins: [],
};
