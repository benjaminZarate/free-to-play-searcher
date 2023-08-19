/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,jsx}',
    './src/Components/**/*.{html,js, jsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [ 
    require('flowbite/plugin')
  ],
}

