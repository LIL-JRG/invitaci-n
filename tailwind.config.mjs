/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        wonka: {
          purple: '#5D1D88',
          gold: '#FFD700',
          green: '#2E8B57',
          pink: '#FF69B4',
          yellow: '#FFE44D'
        }
      },
      fontFamily: {
        berkshire: ['Berkshire Swash', 'cursive'],
        lora: ['Lora', 'serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}