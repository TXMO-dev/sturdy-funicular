/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mainheader: '#2596be',
      subheader:'#F5F5F5',
      blackBody:'#333333',
      tertiary:'#34346c',
      tertiaryblackbody:'#010B13',
      whitebody:'#e8e7ef',
      tertiarywhitbody:'#CCCCCC', 
      footercolor:'#011d28'
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'automatic': 'repeat(auto-fit, minmax(300px, 1fr))',
        'automatic2': 'repeat(auto-fit, minmax(200px, 1fr))',
        'automatic3': 'repeat(auto-fit, minmax(400px, 1fr))',

      },  
    },
  }
}