import type { Config } from "tailwindcss";

// Winter palette: slate, greige, peach beige, and ivory.
const winter = {
  50: '#F5F1EE',
  100: '#EEE7E2',
  200: '#DAC8BE',
  300: '#C7B5AC',
  400: '#A6A9AA',
  500: '#78848A',
  600: '#58626C',
  700: '#414B55',
  800: '#333E47',
  900: '#27323B',
  950: '#1B252D',
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
        purple: winter,
        violet: winter,
        indigo: winter,
        blue: { ...winter, 50: '#F4F6F7', 100: '#E9EDF0', 200: '#D7DFE3' },
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
