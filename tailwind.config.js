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
        "secondaryText":"#000000",
        "infoText":"#6C6C6C",
      },
      maxWidth:{
        container:"1144px"
      },
      backgroundImage:{
        "banner": "url('/src/assets/banner.png')",
        "servicesImgOne" : "url('/src/assets/services_img_one.png')",
        "servicesImgTwo" : "url('/src/assets/services_img_two.png')",
        "servicesImgThree" : "url('/src/assets/services_img_three.png')",
        "BlogImgOne" : "url('/src/assets/Blog_img_one.png')",
        "BlogImgTwo" : "url('/src/assets/Blog_img_two.png')",
        "BlogImgThree" : "url('/src/assets/Blog_img_three.png')",
      }

      
      

    },
  },
  plugins: [],
}