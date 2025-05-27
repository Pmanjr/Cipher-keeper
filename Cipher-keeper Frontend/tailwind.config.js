/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'nova': ['Nova Square', 'cursive'],
    },
    extend: {
      screens: {
        'sm': {'min': '1px', 'max': '500px'},
        // => @media (min-width: 1px and max-width: 500px) { ... }

        'mx': {'min': '501px', 'max': '1150px'},
        // => @media (min-width: 1px and max-width: 1150px) { ... }
  
        'md': {'min': '501px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        // 'xl': {'min': '1280px', 'max': '1535px'},
        'xl': {'min': '1280px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        // '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  // plugins: [],
}
