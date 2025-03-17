/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        info: '#0191FF',
        approve: '#44CA9F',
        warning: '#F88A00',
        danger: '#EF4444',
        indigo: '#3C096C',
        sakura: '#FF2E8C',
      },
      
    },
  },
  plugins: [],
}