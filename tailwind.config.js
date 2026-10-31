/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#12161A',
          charcoal: '#1E2329',
          surface: '#FAF8F5',
          cream: '#F4EFEB',
          warm: '#EFE8DE',
          sand: '#E3DDD3',
          border: '#E2DBD0',
          teak: '#7C5329',
          amber: '#B8860B',
          champagne: '#C8A26A',
          champagneLight: '#DFBE8C',
          brass: '#9E7843',
          bronze: '#4A3B32',
          muted: '#68727D',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        112: '28rem',
        128: '32rem',
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(18, 22, 26, 0.05)',
        elevated: '0 12px 36px -4px rgba(18, 22, 26, 0.08), 0 4px 12px -2px rgba(18, 22, 26, 0.04)',
        architectural: '0 24px 60px -12px rgba(18, 22, 26, 0.12)',
      },
    },
  },
  plugins: [],
};

