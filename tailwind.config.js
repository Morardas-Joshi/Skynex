/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7c3aed", // Purple
          light: "#a855f7",   // Violet
          neon: "#6366f1",    // Indigo
          dark: "#0b1a4a",    // Navy
        },
        secondary: {
          DEFAULT: "#4f46e5", // Blue
        },
        navy: {
          900: "#0b1a4a",
          800: "#122260",
          700: "#1c2f7a",
          600: "#2a3f95",
        },
        ink: {
          DEFAULT: "#0b1a4a",
          2: "#2a3560",
          3: "#5b6690",
          4: "#8a95bd",
        },
        paper: {
          DEFAULT: "#ffffff",
          2: "#f7f8ff",
          3: "#eef0ff",
        },
        background: "#ffffff",
        dark: "#0b1a4a",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'skynex-grad': 'linear-gradient(135deg, #c084fc 0%, #a855f7 25%, #7c3aed 55%, #6366f1 100%)',
        'skynex-soft': 'linear-gradient(135deg, #f5f0ff 0%, #ede9ff 50%, #e0e7ff 100%)',
      },
      boxShadow: {
        'premium': '0 10px 30px rgba(11,26,74,0.10), 0 40px 80px rgba(124,58,237,0.14)',
        'neon': '0 6px 18px rgba(124,58,237,0.35)',
        'glass': '0 8px 32px 0 rgba(11, 26, 74, 0.05)',
      },
      animation: {
        'float': 'float 10s ease-in-out infinite',
        'float-slow': 'float 15s ease-in-out infinite',
        'float-fast': 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -20px)' },
          '50%': { transform: 'translate(-15px, 15px)' },
          '75%': { transform: 'translate(20px, 10px)' },
        },
        'pulse-glow': {
          '0%': { opacity: 0.4, transform: 'scale(1)' },
          '100%': { opacity: 0.7, transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
