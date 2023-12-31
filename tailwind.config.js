/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './client/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font--inter)'],
      },
      colors: {
        gray: {
          50: '#fafafa',
          100: '#F5F5F5',
          150: '#f8f8f8',
          200: '#c0c0c0',
          300: '#7F7F7F',
          400: '#555',
        },
        green: {
          600: '#21AF52',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: '#FF7B29',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      keyframes: {
        open: {
          '0%': {
            opacity: 1,
            transform: 'translateX(100%)',
          },
        },
        close: {
          to: {
            opacity: 0,
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'drawer-open': 'open 0.5s ease-in-out',
        'drawer-close': 'close 0.3s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
