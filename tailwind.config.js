/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // paleta sofisticada baseada na logo
        'park-blue': {
          50: '#e8f2f9',
          100: '#d1e5f3',
          200: '#a3cbe7',
          300: '#75b1db',
          400: '#4797cf',
          500: '#1e5a96',
          600: '#184878',
          700: '#12365a',
          800: '#0c243c',
          900: '#06121e',
        },
        'park-green': {
          50: '#e9f5ec',
          100: '#d3ebd9',
          200: '#a7d7b3',
          300: '#7bc38d',
          400: '#4faf67',
          500: '#2d7a3e',
          600: '#246232',
          700: '#1b4925',
          800: '#123119',
          900: '#09180c',
        },
        'park-yellow': {
          50: '#fef8ea',
          100: '#fdf1d5',
          200: '#fbe3ab',
          300: '#f9d581',
          400: '#f7c757',
          500: '#f4b942',
          600: '#c39435',
          700: '#926f28',
          800: '#614a1a',
          900: '#31250d',
        },
        'moss-green': {
          50: '#f0f4f0',
          100: '#dce6dc',
          200: '#b9ccb9',
          300: '#97b396',
          400: '#749973',
          500: '#5a7a59',
          600: '#4a6448',
          700: '#3a4d39',
          800: '#2a3729',
          900: '#1a201a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
