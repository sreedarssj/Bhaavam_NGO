import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Extracted from icon.jpeg — plum to orchid pink gradient */
        cream: {
          DEFAULT: "#FAF7F2",
          50: "#FDFCFA",
          100: "#FAF7F2",
          200: "#F3EDE3",
        },
        blush: {
          DEFAULT: "#B5509C",
          50: "#FDF5FA",
          100: "#F8E6F2",
          200: "#EEC9E4",
          300: "#D99AC7",
          400: "#C767A7",
          500: "#B5509C",
          600: "#9B3D87",
          700: "#702963",
          800: "#5A214F",
        },
        plum: {
          DEFAULT: "#702963",
          dark: "#662D8C",
          light: "#9B3D87",
        },
        mist: {
          DEFAULT: "#D99AC7",
          50: "#FDF5FA",
          100: "#F8E6F2",
          200: "#EEC9E4",
          300: "#D99AC7",
          400: "#C767A7",
        },
        warm: {
          DEFAULT: "#8B7355",
          50: "#F8F5F1",
          100: "#EDE6DC",
          200: "#D4C4B0",
          300: "#B59B7D",
          400: "#8B7355",
        },
        ink: {
          DEFAULT: "#2C3338",
          muted: "#5A6570",
          light: "#7A8794",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #702963 0%, #C767A7 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(112, 41, 99, 0.08) 0%, rgba(199, 103, 167, 0.12) 100%)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gentle-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "gentle-pulse": "gentle-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
