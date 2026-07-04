import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#014D40",
          50: "#E6F2EF",
          100: "#C2DED7",
          200: "#8FBDB1",
          300: "#5B9C8B",
          400: "#2E7565",
          500: "#014D40",
          600: "#014035",
          700: "#01332B",
          800: "#012620",
          900: "#001A15",
        },
        gold: {
          DEFAULT: "#C5A06A",
          50: "#FAF6EF",
          100: "#F1E7D5",
          200: "#E4D1AE",
          300: "#D6BB88",
          400: "#C5A06A",
          500: "#B68A4C",
          600: "#9A723B",
          700: "#75572D",
          800: "#503B1F",
          900: "#2B2010",
        },
        ink: "#222222",
        "section-gray": "#F7F7F7",
        border: "hsl(214.3 31.8% 91.4%)",
        background: "#FFFFFF",
        foreground: "#222222",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        premium: "0 20px 50px -20px rgba(1, 77, 64, 0.25)",
        "premium-lg": "0 30px 70px -25px rgba(1, 77, 64, 0.35)",
        gold: "0 10px 40px -10px rgba(197, 160, 106, 0.45)",
        card: "0 4px 24px -8px rgba(34, 34, 34, 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "marquee-reverse":
          "marquee-reverse var(--marquee-duration, 40s) linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      backgroundImage: {
        "emerald-gradient":
          "linear-gradient(135deg, #014D40 0%, #012620 100%)",
        "emerald-radial":
          "radial-gradient(circle at 20% 20%, rgba(197,160,106,0.18), transparent 45%), linear-gradient(135deg, #014D40 0%, #01332B 55%, #012620 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #C5A06A 0%, #B68A4C 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
