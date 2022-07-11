/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'primary': '#00bcd4',
            'secondary': '#ff9800',
            'theme': '#007390',
            'badge': '#3f3f51',
            'text-primary': '#374151', 
            'text-secondary': '#6b7280', 
        },
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }