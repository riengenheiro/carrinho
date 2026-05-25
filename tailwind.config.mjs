/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          50: '#FFFDF7',
          100: '#FFF9EB',
          200: '#FFF3D6',
          300: '#FFE8B8',
          400: '#FFD98A',
        },
        warm: {
          50: '#FDF8F6',
          100: '#F9EFEA',
          200: '#F3DFD5',
          300: '#EACBBC',
          400: '#DEB5A0',
          500: '#C9977D',
          600: '#B07B60',
          700: '#8F6048',
          800: '#6B4735',
          900: '#4A3125',
        },
        blush: {
          50: '#FFF5F5',
          100: '#FFE8E8',
          200: '#FFD4D4',
          300: '#FFB3B3',
          400: '#FF8A8A',
          500: '#E86B6B',
        },
        sage: {
          50: '#F4F8F4',
          100: '#E4EFE4',
          200: '#C9DFC9',
          300: '#A3C9A3',
          400: '#7BAF7B',
          500: '#5A965A',
          600: '#457845',
        },
        gold: {
          50: '#FFFBF0',
          100: '#FFF3D4',
          200: '#FFE6A8',
          300: '#FFD470',
          400: '#FFC23A',
          500: '#E6A817',
          600: '#C48B00',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.03)',
        'warm': '0 4px 25px -5px rgba(201, 151, 125, 0.15)',
        'glow': '0 0 40px -10px rgba(255, 194, 58, 0.3)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.1)',
        'cta': '0 4px 14px 0 rgba(230, 126, 34, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
