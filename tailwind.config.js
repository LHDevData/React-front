/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    green: '#0f0', // Classic terminal green
                    dark: '#0a0a0a', // Deep black
                    gray: '#1a1a1a', // Dark gray for cards
                    text: '#e0e0e0', // Off-white text
                    primary: '#22c55e', // Tailwind green-500 equivalent for softer accents
                }
            },
            fontFamily: {
                mono: ['"Courier New"', 'Courier', 'monospace'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'neon': '0 0 5px #0f0, 0 0 10px #0f0',
            }
        },
    },
    plugins: [],
}
