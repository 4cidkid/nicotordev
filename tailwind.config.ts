import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "var(--font-montserrat)",
        subtitle: "var(--font-raleway)",
        body: "var(--font-lora)",
        highlight: "var(--font-roboto)",
      },
      colors: {
        "pink-flamingo": {
          "50": "#fef4ff",
          "100": "#fde8ff",
          "200": "#fad0fe",
          "300": "#f9abfc",
          "400": "#f667f9",
          "500": "#ed45f0",
          "600": "#d425d3",
          "700": "#b01bac",
          "800": "#90188c",
          "900": "#751a70",
          "950": "#4e044a",
        },
      },
    },
  },
  plugins: [
    function ({
      addVariant,
    }: {
      addVariant: (name: string, selector: string) => void;
    }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
export default config;
