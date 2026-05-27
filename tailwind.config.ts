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
        background: "#0B1020",
        "background-secondary": "#111827",
        surface: "#151C2F",
        border: "rgba(255,255,255,0.08)",
        "ai-purple": "#8B5CF6",
        "neon-pink": "#EC4899",
        "premium-cyan": "#06B6D4",
        "electric-blue": "#3B82F6",
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      borderRadius: {
        "xl": "18px",
        "2xl": "24px",
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(139, 92, 246, 0.15)",
        "glow-pink": "0 0 40px rgba(236, 72, 153, 0.15)",
        "glow-cyan": "0 0 40px rgba(6, 182, 212, 0.15)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
