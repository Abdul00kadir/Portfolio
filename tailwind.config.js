/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#F8FAFC",
        lightCard: "#FFFFFF",
        darkCharcoal: "#0B1220",
        primary: {
          DEFAULT: "#16A34A",
          hover: "#15803D",
          light: "#DCFCE7",
          glow: "rgba(22, 163, 74, 0.15)",
        },
        accent: {
          red: "#EF4444",
          coral: "#F95738",
          orange: "#F97316",
          amber: "#F59E0B",
          yellow: "#FACC15",
          lime: "#84CC16",
          green: "#22C55E",
          deepGreen: "#15803D",
        },
        secondary: {
          DEFAULT: "#0F172A",
          muted: "#64748B",
          subtle: "#94A3B8",
        },
        surface: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1.02' }],
        '9xl': ['7.5rem', { lineHeight: '0.98' }],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        }
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(11, 18, 32, 0.04), 0 1px 2px -1px rgba(11, 18, 32, 0.04)',
        'card-hover': '0 16px 32px -5px rgba(11, 18, 32, 0.08), 0 8px 10px -6px rgba(11, 18, 32, 0.04)',
        'signature-glow': '0 0 35px -5px rgba(34, 197, 94, 0.22), 0 0 15px -3px rgba(249, 115, 22, 0.15)',
        'green-subtle': '0 4px 20px 0 rgba(34, 197, 94, 0.25)',
      },
    },
  },
  plugins: [],
}
