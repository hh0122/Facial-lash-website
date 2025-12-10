/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: '#FDECEF',
        gold: '#C9A368',
        deep: '#1F1414',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 40px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
