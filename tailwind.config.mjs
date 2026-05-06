/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: '#FAF8F4',
        wine: '#9A4444',
        olive: '#404728',
        cream: '#E8DFCA',
        blush: '#E7B7A3',
        ink: '#2E2D2A',
        muted: '#7A756E',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
