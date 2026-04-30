import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#2d5016",
        wheat: "#d4a843",
        darkforest: "#1a3009",
        sky: "#7cc4e8",
        sky2: "#3aa6d9",
        slate850: "#0f1a14",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "fade-down": "fadeDown 0.7s ease-out both",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-in-left": "slideInLeft 0.6s ease-out both",
        "slide-in-right": "slideInRight 0.6s ease-out both",
        "spin-slow": "spin 8s linear infinite",
        "blade-spin": "spin 0.18s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "scale-in": "scaleIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-ring": "pulseRing 2.4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        "drone-hover": "droneHover 5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(2.1)", opacity: "0" },
        },
        droneHover: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(4px, -6px)" },
          "50%": { transform: "translate(-3px, -10px)" },
          "75%": { transform: "translate(-5px, -3px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "shimmer-light":
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%)",
      },
      boxShadow: {
        wheat: "0 8px 32px rgba(212, 168, 67, 0.35)",
        forest: "0 8px 32px rgba(45, 80, 22, 0.4)",
        glow: "0 0 0 1px rgba(212,168,67,0.35), 0 12px 40px rgba(212,168,67,0.25)",
        card: "0 10px 30px rgba(15, 26, 20, 0.08), 0 2px 6px rgba(15, 26, 20, 0.06)",
        "card-lg":
          "0 24px 60px -12px rgba(15, 26, 20, 0.25), 0 6px 16px rgba(15,26,20,0.08)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
    },
  },
  plugins: [],
};

export default config;
