/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vibe-neon': 'var(--color-vibe-neon)',
        'vibe-purple': 'var(--color-vibe-purple)',
        'vibe-dark': 'var(--color-vibe-dark)',
        'vibe-gray': 'var(--color-vibe-gray)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        display: 'var(--font-display)',
        mono: 'var(--font-mono)',
      },
    },
  },
  plugins: [],
}