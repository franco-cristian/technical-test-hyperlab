import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    DEFAULT: 'var(--color-brand)',
                    hover: 'var(--color-brand-hover)',
                    dark: 'var(--color-brand-dark)',
                    input: 'var(--color-brand-input)',
                },
                text: {
                    main: 'var(--color-text-main)',
                    muted: 'var(--color-text-muted)',
                },
                gray: {
                    captcha: '#5F5F5F',
                    legal: '#999999',
                },
            },
            fontSize: {
                caption: ['10px', { lineHeight: '14px', letterSpacing: '0.05em' }],
                'body-xs': ['11px', { lineHeight: '16px' }],
                legal: ['9px', { lineHeight: '12px' }],
            },
            borderRadius: {
                figma: '16px',
            },
            backgroundImage: {
                onboarding:
                    'linear-gradient(180deg, var(--gradient-start) 0%, var(--gradient-end) 100%)',
            },
        },
    },

    plugins: [forms],
};
