/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Backgrounds
                'space-black': '#0a0e27',
                'midnight-blue': '#1a1f3a',
                'dark-slate': '#1e1b2e',

                // Accents
                'neon-lime': '#39ff14',
                'neon-lime-dark': '#32d74b',
                'electric-blue': '#00b4d8',
                'electric-blue-dark': '#0096c7',
                'hot-magenta': '#ff006e',
                'hot-magenta-dark': '#d90368',
                'bright-orange': '#ff6d00',

                // Surfaces
                'surface-deep': '#1c2333',
                'surface-mid': '#2a3142',

                // Text
                'text-primary': '#ffffff',
                'text-secondary': '#c8d2e0',
                'text-muted': '#b0bac7',
            },
            fontFamily: {
                sans: ["Manrope", "sans-serif"],
                heading: ["Space Grotesk", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'neon-gradient': 'linear-gradient(135deg, #39ff14 0%, #00b4d8 100%)',
                'hot-gradient': 'linear-gradient(135deg, #ff006e 0%, #ff6d00 100%)',
                'full-spectrum': 'linear-gradient(135deg, #39ff14 0%, #00b4d8 30%, #ff006e 70%, #ff9500 100%)',
            },
            boxShadow: {
                'neon-lime': '0 0 20px rgba(57, 255, 20, 0.4)',
                'neon-blue': '0 0 20px rgba(0, 180, 216, 0.4)',
                'neon-magenta': '0 0 20px rgba(255, 0, 110, 0.4)',
                '3d-sm': '0 4px 8px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)',
                '3d-md': '0 8px 16px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.4)',
                '3d-lg': '0 16px 32px rgba(0, 0, 0, 0.6), 0 8px 16px rgba(0, 0, 0, 0.5)',
                '3d-xl': '0 25px 50px rgba(0, 0, 0, 0.7), 0 12px 24px rgba(0, 0, 0, 0.5)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'pulse-glow': 'glow-pulse 3s infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            }
        },
    },
    plugins: [],
}
