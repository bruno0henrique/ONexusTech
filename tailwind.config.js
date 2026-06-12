/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#13231d',
        muted: '#65736b',
        brand: '#0f3f2e',
        leaf: '#1f7a4d',
        mint: '#dcefe3',
        paper: '#f7faf5',
        line: '#d7e3dc',
        amber: '#a86f18',
        panel: '#ffffff',
        nexus: '#0f3f2e',
        glow: '#1f7a4d',
      },
      boxShadow: {
        soft: '0 14px 34px rgba(15, 63, 46, 0.16)',
        card: '0 28px 70px rgba(19, 35, 29, 0.14)',
        violet: '0 18px 48px rgba(15, 63, 46, 0.14)',
      },
    },
  },
  plugins: [],
};
