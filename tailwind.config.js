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
          DEFAULT: "#8B5CF6", // Premium Purple
          light: "#E9D5FF",   // Light Lavender
          neon: "#A855F7",    // Neon Violet
        },
        secondary: {
          DEFAULT: "#67E8F9", // Soft Cyan
        },
        background: "#F8FAFF", // Soft White
        dark: "#111827",       // Dark Text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)',
        'orb-purple': 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
        'orb-cyan': 'radial-gradient(circle, rgba(103, 232, 249, 0.4) 0%, transparent 70%)',
      },
      boxShadow: {
        'premium': '0 20px 50px rgba(139, 92, 246, 0.1)',
        'neon': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glass': '0 8px 32px 0 rgba(139, 92, 246, 0.1)',
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
