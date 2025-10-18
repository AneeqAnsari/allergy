/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [    "./App.{js,jsx,ts,tsx}",
   "./app/**/*.{js,jsx,ts,tsx}",  
    "./components/**/*.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        primary: "#39A75A",
        secondary:"#b0c566",
        backgroud:"#1F1F1F",

        gray: {
          100: "#878787",
          200: "#878787",
        },
        dark: {
          100: "#181C2E",
        },

      
        error: "#F14141",
        success: "#2F9B65",
      },
      fontFamily: {
        quicksand: 
        ["Quicksand-Regular", "sans-serif"],
        "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
        "quicksand-semibold": ["Quicksand-SemiBold", "sans-serif"],
        "quicksand-light": ["Quicksand-Light", "sans-serif"],
        "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
        montserrat: 
        ["Montserrat-Regular", "sans-serif"],
        "montserrat-bold": ["Montserrat-Bold", "sans-serif"],
        "montserrat-semibold": ["Montserrat-SemiBold", "sans-serif"],
        "montserrat-medium": ["Montserrat-Medium", "sans-serif"],
        "montserrat-light": ["Montserrat-Light", "sans-serif"],
        "montserrat-extrabold": ["Montserrat-ExtraBold", "sans-serif"],
        "montserrat-regular": ["Montserrat-Regular", "sans-serif"],

        poppins: 
        ["Poppins-Regular", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
        "poppins-semibold": ["Poppins-SemiBold", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
        "poppins-light": ["Poppins-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
