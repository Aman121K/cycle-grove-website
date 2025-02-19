import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",       
        secondary: "var(--color-secondary)",   
        accent: "var(--color-accent)",         
        textPrimary: "var(--text-primary)",    
        textSecondary: "var(--text-secondary)",
        textPink:"var(--text-pink)",
      },
      backgroundImage: {
        'custom-gradient': "var(--bg-gradient)"
      },
    },
  },
  plugins: [],
} satisfies Config;
