import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // EdTech Brand Colors
        'edu-primary': {
          50: "hsl(var(--edu-primary-50))",
          100: "hsl(var(--edu-primary-100))",
          200: "hsl(var(--edu-primary-200))",
          300: "hsl(var(--edu-primary-300))",
          400: "hsl(var(--edu-primary-400))",
          500: "hsl(var(--edu-primary-500))", // Main brand color
          600: "hsl(var(--edu-primary-600))",
          700: "hsl(var(--edu-primary-700))",
          800: "hsl(var(--edu-primary-800))",
          900: "hsl(var(--edu-primary-900))",
        },
        'edu-orange': {
          50: "hsl(var(--edu-orange-50))",
          100: "hsl(var(--edu-orange-100))",
          200: "hsl(var(--edu-orange-200))",
          300: "hsl(var(--edu-orange-300))",
          400: "hsl(var(--edu-orange-400))",
          500: "hsl(var(--edu-orange-500))",
          600: "hsl(var(--edu-orange-600))",
          700: "hsl(var(--edu-orange-700))",
          800: "hsl(var(--edu-orange-800))",
          900: "hsl(var(--edu-orange-900))",
        },
        'edu-green': {
          50: "hsl(var(--edu-green-50))",
          100: "hsl(var(--edu-green-100))",
          200: "hsl(var(--edu-green-200))",
          300: "hsl(var(--edu-green-300))",
          400: "hsl(var(--edu-green-400))",
          500: "hsl(var(--edu-green-500))",
          600: "hsl(var(--edu-green-600))",
          700: "hsl(var(--edu-green-700))",
          800: "hsl(var(--edu-green-800))",
          900: "hsl(var(--edu-green-900))",
        },
        'edu-purple': {
          50: "hsl(var(--edu-purple-50))",
          100: "hsl(var(--edu-purple-100))",
          200: "hsl(var(--edu-purple-200))",
          300: "hsl(var(--edu-purple-300))",
          400: "hsl(var(--edu-purple-400))",
          500: "hsl(var(--edu-purple-500))",
          600: "hsl(var(--edu-purple-600))",
          700: "hsl(var(--edu-purple-700))",
          800: "hsl(var(--edu-purple-800))",
          900: "hsl(var(--edu-purple-900))",
        },
        'edu-pink': {
          50: "hsl(var(--edu-pink-50))",
          100: "hsl(var(--edu-pink-100))",
          200: "hsl(var(--edu-pink-200))",
          300: "hsl(var(--edu-pink-300))",
          400: "hsl(var(--edu-pink-400))",
          500: "hsl(var(--edu-pink-500))",
          600: "hsl(var(--edu-pink-600))",
          700: "hsl(var(--edu-pink-700))",
          800: "hsl(var(--edu-pink-800))",
          900: "hsl(var(--edu-pink-900))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
