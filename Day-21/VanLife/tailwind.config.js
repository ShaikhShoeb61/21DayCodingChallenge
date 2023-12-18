// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('/images/background-image.png')",
      },
    
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        lightgrey:"#4D4D4D",
        primarybutton:"#0077B5",
        secondarybutton:"#161616",
        darkgrey:"#252525",
        lightdarkgrey:"#aaa",
        primarylight:"#E6F5F5",
        primarydark:"#B5E2F9",
        active:"#161616",
        typeactive: "#FFEAD0",
        simple:"#E17654",
        luxury:"#161616",
        rugged:"#115E59"

      },
    },
  },
  plugins: [],
};
