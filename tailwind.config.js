/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0A3D91',
        'secondary-blue': '#1565C0',
        'accent-blue': '#1E88E5',
        'glass-white': 'rgba(255, 255, 255, 0.9)',
        'off-white': '#FDF5E6',
        'cream': '#FAEBD7',
        'beige': '#F5F0E8',
        'neon-blue': '#1B3FAB',
      },
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #0A3D91 0%, #1565C0 100%)',
        'white-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F0F4F8 100%)',
      }
    },
  },
  plugins: [],
}
