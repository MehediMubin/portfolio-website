/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            "custom-focus": "#FF2E00",
         },
      },
      fontFamily: {
         custom: ["Mooli"],
      },
   },
   plugins: [require("daisyui")],
};
