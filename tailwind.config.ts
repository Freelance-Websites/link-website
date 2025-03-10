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
        accent: "#C49609",
        dark: "#004550",
        light: "#EEE7E7",
      },
    },
  },
  plugins: [],
};
export default config;
