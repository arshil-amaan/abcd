/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'transparent': 'transparent',
      },
      fontFamily: {
        codic: ['codic', 'monospace'],
        beauty: ['beauty', 'cursive'],
        defall: ['defall', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #22d3ee 97%, #fde68a 99.9%)',
      },
      // Define custom perspective values
      perspective: {
        '1000': '1000px',
      },
      // Define custom transform-style values
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke-1': {
          '-webkit-text-stroke': '1px #fcd34d',
        },
        '.text-fill-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
      }, ['responsive', 'hover']);
    },
  ],
};
