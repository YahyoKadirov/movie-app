/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     backgroundImage:{
        'banner': 'url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yF1eOkaYvwiORauRCPWznV9xVvi.jpg")'
    },
  },
  plugins: [],
}
}

