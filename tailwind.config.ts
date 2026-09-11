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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-navy': '#0F3C63',
        'brand-sky': '#28A9DC',
        'brand-red': '#C1272D',
        'brand-green': '#235c1d',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-montserrat)'],
        harlow: ['"Harlow Solid Italic"', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
