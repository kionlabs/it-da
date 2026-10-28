import type { Config } from "tailwindcss";

// Muted palette preview: mauve, lavender gray, soft yellow, and ivory.
const muted = {
  50: '#F9EEE8',
  100: '#F3E8EC',
  200: '#E8D8E2',
  300: '#D8C0D0',
  400: '#C6A0B7',
  500: '#A77B96',
  600: '#8D617C',
  700: '#765168',
  800: '#604254',
  900: '#493440',
  950: '#30242C',
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: muted,
        violet: muted,
        indigo: muted,
        blue: { ...muted, 50: '#F5F3F8', 100: '#EDEBF4', 200: '#DCD9E8' },
        periwinkle: {
          mint: '#ADEEE2',
          purple: '#A260EE',
        },
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
    },
  },
  plugins: [],
};
export default config;
