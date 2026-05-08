import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';

export default [
    {
        ignores: ['public/**', 'vendor/**', 'resources/js/ziggy.js', 'bootstrap/ssr/**'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            parser: tsparser,
            globals: {
                ...globals.browser,
                route: 'readonly',
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
        },
        settings: {
            react: { version: 'detect' },
        },
    },
    {
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            react: pluginReact,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.serviceworker,
                route: 'readonly',
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'off',
        },
        settings: {
            react: { version: 'detect' },
        },
    },
    prettierConfig,
];
