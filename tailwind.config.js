/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c3e50',
        secondary: '#e74c3c',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        mono: [
          'source-code-pro',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}
