/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "/data/data/com.termux/files/home/my-app/src/**/*.{js,tsx,jsx,html}",
     "/data/data/com.termux/files/home/my-app/public/**/*.{index.html, js,jsx,tsx}",
     ],
  theme: {
    extend: {
      keyframes:{
        wave:{
          '0%':{transform: 'translateX(-1px)'},
          '25%':{transform: 'translateX(-1.5px)'},
         '50%':{transform: 'translateX(1px)'},
         '75%':{transform: 'translateX(1.5px)'},
        '100%':{transform: 'translateX(0)'}
        }
      }
    },
    animation:{ 
    wave: 'wave 3s infinite linear',
    }
  },
  plugins: [],
}

