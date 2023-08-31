/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DGBlue: "hsl(224, 30%, 27%)",
        LSblue: "hsl(252, 100%, 67%)",
        LRblue: "hsl(241, 81%, 54%)",
        Violetblue: "hsla(256, 72%, 46%, 1)",
        Persianblue: "hsla(241, 72%, 46%, 0)",
        LightRedd: "hsl(0, 100%, 67%)",
        OrangeYelloww: "hsl(39, 100%, 56%)",
        GreenTeall: "hsl(166, 100%, 37%)",
        CobaltBluee: "hsl(234, 85%, 45%)",
      },
      fontFamily: {
        HankenGrotesk: ["HankenGrotesk", "cursive"],
      },
      backgroundColor: {
        LightRedd: "hsl(0, 100%, 67%)",
        OrangeYelloww: "hsl(39, 100%, 56%)",
        GreenTeall: "hsl(166, 100%, 37%)",
        CobaltBluee: "hsl(234, 85%, 45%)",
      },
    },
  },
  plugins: [],
};
