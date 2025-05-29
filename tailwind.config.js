/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f5f1',
          100: '#f3e9dd',
          200: '#e8d3b9',
          300: '#dcb98f',
          400: '#d09e65',
          500: '#c3894a',
          600: '#b4703c',
          700: '#955632',
          800: '#7a472f',
          900: '#653d2c'
        },
        secondary: {
          50: '#f3f8fa',
          100: '#deedf3',
          200: '#bfdde7',
          300: '#94c5d6',
          400: '#61a5bf',
          500: '#4289a7',
          600: '#3a7491',
          700: '#345f77',
          800: '#305163',
          900: '#2c4553'
        },
        accent: {
          50: '#faf5f2',
          100: '#f6e9df',
          200: '#edceb6',
          300: '#e4ac85',
          400: '#da8352',
          500: '#d06a30',
          600: '#c05224',
          700: '#9f3e1f',
          800: '#81321e',
          900: '#6b2c1b'
        },
        temple: {
          red: '#a61c1c',
          gold: '#d4af37',
          orange: '#e67e22',
          green: '#2e7d32'
        },
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};