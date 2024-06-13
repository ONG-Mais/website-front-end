import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/GlobalComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    margin: {
      r2: "2%",
      r4: "4%",
      r6: "6%",
      r8: "8%",
      r10: "10%",
      r11: "11%",
      r12: "12%",
      r14: "14%",
      r16: "16%",
      r18: "18%",
      r20: "20%",
      r21: "21%",
      r22: "22%",
      r24: "24%",
    },
    fontFamily: {
      Mulish: ["Mulish", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
    },
    colors: {
      primary: {
        "100": "#DCF7FF",
        "300": "#9DD9EC",
        "500": "#00ADE2",
        "700": "#0297C5",
        "900": "#00759A",
      },
      secondary: {
        "100": "#B2E9BE",
        "300": "#7FCA8F",
        "500": "#00BA29",
        "700": "#009D23",
        "900": "#007219",
      },
      tertiary: {
        "100": "#FFFAB1",
        "300": "#FFF65D",
        "500": "#FFF10F",
        "700": "#DFD200",
        "900": "#B4A900",
      },
      accent: {
        "100": "#FFC1B6",
        "300": "#FF765E",
        "500": "#FD2600",
        "700": "#DC2201",
        "900": "#9D1C05",
      },
      neutral: {
        "0": "#FEFEFE",
        "100": "#ECECEC",
        "200": "#D3D4D5",
        "300": "#B7B9BA",
        "400": "#949697",
        "500": "#797C7D",
        "600": "#5C5F61",
        "700": "#44484A",
        "800": "#1C1F20",
        "900": "#011217",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
