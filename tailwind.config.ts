import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      signOutButton: {
        '@apply outline-none border-none flex flex-col w-full max-w-[140px] h-[50px] rounded-[0.5em] shadow-[0 0.625em 1em 0 rgba(30, 143, 255, 0.35)] overflow-hidden transition duration-600 ease-in-out': {},
      },
      signOutP: {
        '@apply text-white font-bold text-base': {},
      },
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
} satisfies Config;
