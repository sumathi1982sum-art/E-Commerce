/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd6ff',
          300: '#8ebcff',
          400: '#5a96ff',
          500: '#3b76f6',
          600: '#2455e8',
          700: '#1e44c9',
          800: '#1e3aa4',
          900: '#1f3682',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 12px rgba(15, 23, 42, 0.06)',
        card: '0 4px 24px rgba(15, 23, 42, 0.08)',
        float: '0 12px 40px rgba(59, 118, 246, 0.18)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
