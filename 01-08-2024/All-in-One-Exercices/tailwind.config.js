/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
        purple: "hsl(259, 100%, 65%)",
        "light-red": "hsl(0, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        "off-white": "hsl(0, 0%, 94%)",
        "light-grey": "hsl(0, 0%, 86%)",
        "smokey-grey": "hsl(0, 1%, 44%)",
        "off-black": "hsl(0, 0%, 8%)",
        "green-200": "hsl(148, 38%, 91%)",
        "green-600": "hsl(169, 82%, 27%)",
        red: "hsl(0, 66%, 54%)",
        white: "hsl(0, 0%, 100%)",
        "grey-500": "hsl(186, 15%, 59%)",
        "grey-900": "hsl(187, 24%, 22%)",
        lime: "hsl(61, 70%, 52%)",
        red: "hsl(4, 69%, 50%)",
        white: "hsl(0, 0%, 100%)",
        slate100: "hsl(202, 86%, 94%)",
        slate300: "hsl(203, 41%, 72%)",
        slate500: "hsl(200, 26%, 54%)",
        slate700: "hsl(200, 24%, 40%)",
        slate900: "hsl(202, 55%, 16%)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
