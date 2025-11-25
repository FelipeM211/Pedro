/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1120', // Deep Navy
          light: '#1E293B',
          dark: '#020617',
        },
        secondary: {
          DEFAULT: '#0EA5E9', // Sky Blue
          dark: '#0284C7',
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
      }
    },
  },
  plugins: [],
}


