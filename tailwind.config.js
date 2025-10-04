/** @type {import('tailwindcss').config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1400px",
        },
        extend: {
            colors: {
                bodyColor: "hsl(216, 100%, 4%)",
                primaryColor: "hsl(209, 87%, 21%)",
                primaryColorLight: "hsl(209, 74%, 45%)",
                whiteColor: "#fff",
                textColor: "#DDD",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "10px",
                md: "30px",
            },
        },
        fontFamily: {
            poppins : ["Poppins", "sans-serif"],
            Londrina : ["Londrina Outline", "sans-serif"],
        },
    },
    plugins: [],
}