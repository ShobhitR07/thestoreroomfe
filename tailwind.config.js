/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // headerColor: "#242530",
        // textColor: "#ffffff",
        // btnColor: "#0172F4",
        // noteColor: "#FFCF7C",

        headerColor: "#0b132b",
        textColor: "#ffffff",
        btnColor: "#0172F4",
        noteColor: "#FFCF7C",
        //landing page
        bgcolor:"#9d4edd",
        // mypcolor:'#ff4d6d',
        mypcolor:'#a53860',
        cpcolor:'#892b64',
        pageColor:'#14746f',
        tcolor:"#bfc0c0",
        brandcolor:"#d8a48f",
        parameter:"#b21e35",
        tstText:"#d81159",
        supColor:"#640d14",
        formColor:"#bb8588",
        sformColor:"#ff1654",
        notepadColor:"#f9c80e",
        adminArea:"#ff6700"
        

        
       

      },
      fontWeight: {
        customWeight: 500,
      },
      height: {
        // headerHeight: "74px",
        headerHeight: "74px",
        
      },
      maxHeight: {
        navbarHeight: "420px",
      },
      minHeight: {
        customHeight: "600px",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        dancingScript: ["Dancing Script"],
      },
      fontSize: {
        logoText: "30px",
        customText: "15px",
        tablehHeaderText: "16px",
        headerText: ["50px", "60px"],
        tableHeader: ["15px", "25px"],
      },

      backgroundColor: {
        customRed: "rgba(172, 30, 35, 1)",
        // customRed: "#640D5F",
        // testimonialCard: "#F9F9F9",
        testimonialCard: "#202020",
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
}