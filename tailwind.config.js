/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00FF88',
        'dark-bg': '#071A12',
        'cyber-blue': '#00C2FF', // Secondary neon color
        'glass-white': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 255, 136, 0.5), 0 0 20px rgba(0, 255, 136, 0.3)',
        'neon-blue': '0 0 10px rgba(0, 194, 255, 0.5), 0 0 20px rgba(0, 194, 255, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
      },
    },
  },
  plugins: [],
}
