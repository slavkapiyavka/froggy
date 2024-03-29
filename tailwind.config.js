/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                black: {
                    50: '#E6E6E6',
                    100: '#CFCFCF',
                    200: '#9C9C9C',
                    300: '#6B6B6B',
                    400: '#3B3B3B',
                    500: '#090909',
                    600: '#080808',
                    700: '#050505',
                    800: '#030303',
                    900: '#030303',
                },
                red: {
                    50: '#FDECEC',
                    100: '#FCD9D9',
                    200: '#F9B4B4',
                    300: '#F58E8E',
                    400: '#F26969',
                    500: '#EF4444',
                    600: '#E11313',
                    700: '#A90F0F',
                    800: '#710A0A',
                    900: '#380505',
                },
                green: {
                    50: '#E9FBF0',
                    100: '#CFF7DE',
                    200: '#9FEFBC',
                    300: '#6FE69B',
                    400: '#40DE7A',
                    500: '#22C55E',
                    600: '#1B9D4B',
                    700: '#147538',
                    800: '#0D4E25',
                    900: '#072713',
                },
                blue: {
                    50: '#EBF3FE',
                    100: '#D8E6FD',
                    200: '#B1CEFB',
                    300: '#8AB5FA',
                    400: '#639CF8',
                    500: '#3B82F6',
                    600: '#0B60EA',
                    700: '#0848B0',
                    800: '#053075',
                    900: '#03183B',
                },
                purple: {
                    50: '#F8F0FE',
                    100: '#EEDDFD',
                    200: '#DCBBFC',
                    300: '#CB99FA',
                    400: '#BA77F9',
                    500: '#A855F7',
                    600: '#8815F4',
                    700: '#6609BE',
                    800: '#44067F',
                    900: '#22033F',
                },
                yellow: {
                    50: '#FFFCE5',
                    100: '#FFF9CC',
                    200: '#FFF399',
                    300: '#FFED66',
                    400: '#FFE733',
                    500: '#FFE100',
                    600: '#CCB400',
                    700: '#998700',
                    800: '#665A00',
                    900: '#332D00',
                },
            },
        },
    },
    plugins: [require('tailwindcss'), require('autoprefixer')],
}
