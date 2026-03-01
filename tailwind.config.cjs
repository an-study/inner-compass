/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        brandNavy: '#01112D',
        brandGold: '#E1AD4D'
      },
      fontFamily: {
        // Primary UI / heading font: rounded Japanese (fallbacks included)
        sans: ["M PLUS Rounded 1c", 'Noto Sans JP', 'Nunito', 'Inter', 'system-ui'],
        heading: ["M PLUS Rounded 1c", 'Noto Sans JP', 'Nunito', 'Inter', 'system-ui'],
      }
    }
  },
  plugins: []
};
