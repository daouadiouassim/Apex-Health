/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Your custom color palette
        'apex-bg': '#f2f5f3',
        'apex-cream': '#f7efe6',
        'apex-beige': '#e9dccf',
        'apex-accent': '#c77b4f',
        'apex-accent-dark': '#a65f34',
        'apex-text': '#214c3b',
        'apex-muted': '#6b6b6b',
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'apex-card': '0 8px 30px rgba(33,76,59,0.06)',
      }
    },
  },
  plugins: [],
}
