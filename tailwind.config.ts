import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#77f96d",
          secondary: "#ca0de2",
          accent: "#a6f446",
          neutral: "#39263b",
          "base-100": "#30364a",
          info: "#4e6bca",
          success: "#2ac0ac",
          warning: "#9b770d",
          error: "#f72265",
        },
      },
    ],
  },
};
export default config;
