/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":["Poppins", "sans-serif"]
      },
      colors: {
        "primary": "#F40404",
        "secondary": "#282828",
        "primaryText":"#FFFFFF",
        "secondaryText":"000000",
        "infoText":"6C6C6C"
      },
      maxWidth:{
        container:"1144px"
      },
      backgroundImage:{
        "banner": "url(src/assets/banner.png)"
      }
      

    },
  },
  plugins: [],
}