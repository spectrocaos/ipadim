tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                dark: '#2C4F5E', /* Using primary color for dark elements where appropriate, or keep a dark gray? The instruction is 'Azul-petróleo ~30% -> cor dominante'. */
                primary: {
                    DEFAULT: '#2C4F5E',
                    800: '#1a333d',
                    900: '#0f1f26',
                },
                gold: {
                    400: '#d1b96a',
                    500: '#B8962E', /* Dourado */
                    600: '#917624',
                },
                silver: '#A0A0A0',
                zinc: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b', // standard dark
                }
            }
        }
    }
}
