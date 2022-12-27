/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html",
      "./js/api/*.js"
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
          },
      extend: {
        colors: {
            yellowColor: '#f4cb04',
        },
        backgroundImage: {
            'gray-wall': "url('/img/bg-gray.jpg')",
            'gray-wall-2': "url('/img/bg-gray-2.jpg')",
          }
      },
    },
    plugins: [],
  }