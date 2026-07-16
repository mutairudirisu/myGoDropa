/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-primary": "#FF6B00",
        "orange-dark": "#ea580c",
        "green-primary": "#10b981",
      },
      fontFamily: {
        sans: ["var(--font-quicksand)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        bevan: ["var(--font-bevan)", "serif"],
        "permanent-marker": ["var(--font-permanent-marker)", "cursive"],
        "bricolage-grotesque": ["var(--font-bricolage-grotesque)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
