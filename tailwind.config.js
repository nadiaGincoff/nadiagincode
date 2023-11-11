/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '820px',
        lg: '976px',
        xl: '1440px',
      },
      letterSpacing: {
        tightest: '-.1em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        'buttonbeige': '#f6f3ee',
        'beige': '#ede7de',
        'darkgray': '#364442',
        'darkgreen': '#025a4e',
        'secondary': '#4c6763',
        'white': '#f4f3f0',
        'primaryaccent': 'hsla(0, 0%, 100%, 1)'
      },
    },
  },
  plugins: [],
}