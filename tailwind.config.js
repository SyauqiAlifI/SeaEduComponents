// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       colors: {
//         "obito-black": "#0A0723",
//         "obito-green": "#2F6A62",
//         "obito-grey": "#EAECEE",
//         "obito-red": "#EF372B",
//         "obito-text-grey": "#87898C",
//         "obito-light-green": "#E0EAE8",
//         "obito-light-red": "#FFE3E1",
//         "obito-text-secondary": "#6A6F7C",
//       },
//       keyframes: {
//         slide: {
//           "0%": { transform: "translateX(0%)" },
//           "100%": { transform: "translateX(-100%)" },
//         },
//       }
//     },
//   },
//   plugins: [],
// }

import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream//*.blade.php',
        './storage/framework/views/*.php',
        './resources/views//*.blade.php',
        './src/*'
    ],

    theme: {
        extend: {
            fontFamily: {
                "poppins": "Poppins",
            },
            fontSize: {
                'heading-1': '48px',
                'heading-2': '36px',
                'heading-3': '34px',
                'heading-4': '30px',
                'heading-5': '28px',
                'heading-6': '26px',
                'heading-7': '24px',
                'heading-8': '20px',
                'heading-9': '18px',
                'base': '14px',
                'normal': '12px',
            },

            colors: {
                blue: {
                5: '#E9F5FE',
                10: '#bbdefb',
                20: '#90caf9',
                30: '#64b5f6',
                40: '#42a5f5',
                50: '#2196f3',
                60: '#1e88e5',
                70: '#1976d2',
                80: '#1565c0',
                90: '#0466c8',
                100: '#0d47a1',
                110: '#0a369d',
                120: '#00296b'
                },
                orange: {
                5: '#FDF5E8',
                10: '#F9E3BB',
                20: '#F5D18F',
                30: '#F1BF62',
                40: '#ffcc00',
                50: '#ffbf00',
                60: '#ffb300',
                70: '#ffa600',
                80: '#ff9900',
                90: '#ff8c00',
                100: '#ff8000',
                },
                red: {
                10: '#FDE8E9',
                30: '#F9BBBF',
                50: '#F58F95',
                70: '#F1626A',
                100: '#EB1F2B',
                },
                green: {
                5: '#E7FAE9',
                10: '#BFF5C5',
                20: '#8FE999',
                30: '#5CE06B',
                40: '#3CD94E',
                50: '#0BD022',
                60: '#0ABD1F',
                70: '#089418',
                80: '#05570E',
                100: '#114232'
                },
                gray: {
                10: '#E6E6E7',
                30: '#B4B6B9',
                50: '#82868B',
                70: '#50555D',
                100: '#050D18',
                },
            },

            keyframes: {
                slideToL: {
                "0%": { transform: "translateX(0%)" },
                "100%": { transform: "translateX(-100%)" },
                },
                slideToR: {
                "0%": { transform: "translateX(-100%)" },
                "100%": { transform: "translateX(0%)" },
                },
            },
        },
    },

    plugins: [forms, typography],
};