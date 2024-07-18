/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs1': {'min': '340px', 'max':'358px'},
        'xs2': {'min': '359px', 'max':'500px'},
        'xs3': {'min': '390px', 'max':'411px'},
        'xs4': {'min': '370px', 'max':'413px'},
        'xs5': {'min': '412px', 'max':'429px'},
        'xs6': {'min': '430px', 'max':'538px'},
        'xs7': {'min': '539px', 'max':'649px'},
        'ipad':{'min' : '760px', 'max':'1280px'},
        'tablet':{'min' :  '900px','max': '1400px'},
      },
    },
  },
  plugins: [],
}