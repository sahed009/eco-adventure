/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ptSerif: ["PT Serif", "serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "bounce-slower": "bounce 5s infinite",
        "bounce-fast": "bounce 1.5s infinite",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
