/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'clock': 'Russo One, sans-serif'
            },
            width:{
                '100vw':'100vw'
            }
        },
    },
    plugins: [],
}
