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
          yellow: '#FFE44D',
          cream: '#FDF6E3',
          chocolate: '#3C1206'
        }
      },
      fontFamily: {
        berkshire: ['Berkshire Swash', 'cursive'],
        lora: ['Lora', 'serif'],
        alice: ['Alice', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        wonka: ['Berkshire Swash', 'cursive']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      boxShadow: {
        'magical': '0 0 15px rgba(93, 29, 136, 0.3)',
        'golden': '0 0 15px rgba(255, 215, 0, 0.3)',
      }
    },
  },
  plugins: [],
}