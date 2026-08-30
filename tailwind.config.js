/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Electric Royal Blue Logo Accent Palette (#2563EB)
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172554',
        },



        // Modern SaaS Light Mode
        lightBg: "#F8FAFC",
        lightCard: "#FFFFFF",
        lightCardSec: "#F1F5F9",
        lightTextPrimary: "#0F172A",
        lightTextSec: "#475569",
        lightBorder: "#E2E8F0",

        // Modern SaaS Dark Mode (Obsidian / Deep Space)
        darkBg: "#090A0F",
        darkCard: "#11131F",
        darkCardSec: "#191D2E",
        darkTextPrimary: "#F8FAFC",
        darkTextSec: "#94A3B8",
        darkBorder: "#1E2438",

        ytRed: "#FF0033",
        fbBlue: "#1877F2",
      },
      fontFamily: {
        sans: ["Inter", "var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        videosave: "0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
        "videosave-glow": "0 10px 25px -5px rgba(37, 99, 235, 0.15)",
        "videosave-hover": "0 15px 30px -10px rgba(37, 99, 235, 0.2)",
      },

      borderRadius: {
        "4xl": "32px",
        "3xl": "24px",
        "2xl": "16px",
        "xl": "12px",
      },
    },
  },
  plugins: [],
};



