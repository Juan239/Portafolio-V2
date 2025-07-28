/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx,vue,svelte,mdx,md}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors:{
        "light-primario": "#0F172A",       // azul oscuro frío
        "light-secundario": "#64748B",     // azul grisáceo
        "light-fondo": "#E2E8F0",           // azul pálido

        "dark-primario": "#E5E7EB",
        "dark-secundario": "#6B7280",
        "dark-fondo": "#0A0A0A"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}
