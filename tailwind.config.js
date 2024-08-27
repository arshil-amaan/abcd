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
      });
    },
  ],
}
