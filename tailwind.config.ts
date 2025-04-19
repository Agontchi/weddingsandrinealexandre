import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#333333',
        'secondary': '#5a6b5d', // The greenish-gray color in the bottom section
        'accent': '#e0d8d0', // Subtle beige accent color
        'light': '#f8f7f5', // Light background color
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'hero': 'calc(100vh - 80px)',
      },
      letterSpacing: {
        'widest': '0.2em',
      }
    },
  },
  plugins: [],
}

export default config