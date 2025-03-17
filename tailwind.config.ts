import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        logo: "#009597",
        primary: "#75F493",
        secondary: "#C49609",
        dark: "#004550",
        light: "#EEE7E7",
      },
      fontFamily: {
        serif: ['Georgia', 'ui-serif', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['Replica LL Regular', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        numbers: ['Baudot', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
