/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#FF2E00",
            customPurple: "#663ED5",
         },
      },
      fontFamily: {
         custom: ["Mooli"],
      },
   },
   plugins: [require("daisyui")],
};
