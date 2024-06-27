import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(function ({
      addUtilities,
      theme,
    }: {
      addUtilities: any;
      theme: any;
    }) {
      addUtilities({
        ".position-unset": {
          position: "unset",
        },
      });
      const md = theme("screens.md", {});
      addUtilities({
        body: {
          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.base"),
          fontWeight: theme("fontWeight.medium"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.base"),
          },
        },
        bodyS: {
          fontSize: theme("fontSize.sm"),
          lineHeight: theme("lineHeight.base"),
          fontWeight: theme("fontWeight.medium"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.sm"),
          },
        },
         bodyXS: {
          fontSize: theme("fontSize.xs"),
          lineHeight: theme("lineHeight.base"),
          fontWeight: theme("fontWeight.medium"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.xs"),
          },
        },
        h1: {
          fontSize: theme("fontSize.2xl"),
          lineHeight: theme("lineHeight.base"),
          fontWeight: theme("fontWeight.medium"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.2xl"),
          },
        },
        h2: {
          fontSize: theme("fontSize.xl"),
          lineHeight: theme("lineHeight.base"),
          fontWeight: theme("fontWeight.medium"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.xl"),
          },
        },
        h3: {
          fontSize: theme("fontSize.lg"),
          lineHeight: theme("lineHeight.base"),
          fontWeight: theme("fontWeight.bold"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.lg"),
          },
        },
        h4: {
          fontSize: theme("fontSize.md"),
          lineHeight: theme("lineHeight.base"),
          fontWeight: theme("fontWeight.bold"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.md"),
          },
        },
      });
    }),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lime: "#E3EF89",
        green: "#365745",
        clay: "#AC562C",
        white: "#FFF"
      },
      keyframes: {
        animate: {
          "0%": { width: "0%" },
          "25%": { width: "10%" },
          "50% ": { width: "40%" },
          "75%": { width: "50%" },
          "100%": { width: "100%" },
        },
      },
    },
    screens: {
      sm: "600px",
      md: "905px",
      lg: "1240px",
      xl: "1440px",
    },
    fontSize: {
    
      xs: "0.75rem", //12px
      sm: "1rem", //16px
      base: "1.125rem",  //18px
      md: "1.25rem", //20px
      lg: "2rem",  //32px
      xl: "3.25rem", //52px
      "2xl": "4rem", //64px
    },
  lineHeight: {
      base: "1.4",  
    },
  },
};

export default config;