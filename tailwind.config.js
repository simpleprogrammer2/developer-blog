module.exports = {
    darkMode: 'media',
    content: ['./components/**/*.tsx', './pages/**/*.tsx',  "./src/**/*.{js,jsx,ts,tsx}",],
  
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }