/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1140px",
      },
    },
    extend: {
      colors: {

      },
      borderRadius: {

      },
    },
  },
  plugins: [],
}

