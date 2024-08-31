import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        manrope: ["var(--font-manrope)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "text-bluenwhite-radgrad":
          "radial-gradient(97.49% 227.61% at -4.18% -26.61%, #FFFFFF 0%, #41FFDD 58.43%, #FFFFFF 100%)",
        standBtnGrad: "linear-gradient(97.23deg, #3EC4DB -7.44%, #764AFB 99.83%, #20E6AB 99.85%)",
        "text-pink-radgrad":
          "radial-gradient(120% 181.48% at 0% 19.17%, #FFFFFF 0%, #F79FFF 58.43%, #FFFFFF 100%)",
        transparentCardGrad:
          "linear-gradient(299.05deg, rgba(255, 255, 255, 0.1) -26.13%, rgba(255, 255, 255, 0.02) 100%)",
        transparetnCardGradBorder:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)",
        keyCardConic:
          "conic-gradient(from 180deg at 50% 50%, #FF00A8 0deg, #0047FF 180deg, #00FFD1 360deg)",
        hoverGradient: "linear-gradient(97.23deg, #3EC4DB -7.44%, #764AFB 99.83%, #20E6AB 99.85%)",
        activeButtonGrad:
          "linear-gradient(97.23deg, #1BA5BD -7.44%, #4D22CF 99.83%, #20E6AB 99.85%)",
      },
      boxShadow: {
        footerShadows: "0px 2px 4px -2px #0000001A, 0px 4px 6px -1px #0000001A",
        headerTextShadow: "0px 0px 10px 0px #5B42FF",
        buttonHoverShadow: "0px 0px 30px 0px #4893FF",
      },
      colors: {
        bgColor: "#0C0E0C",
      },
    },
  },
  plugins: [],
};
export default config;
