// @ts-check

import eslint from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'

export default [
    eslint.configs.recommended,
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            globals: { ...globals.node },
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 'latest',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
        },
    },
    {
        ignores: [
            'node_modules',
            'dist',
            'coverage',
            './commitlint.config.cjs',
            'src/middleware/error.middleware.ts',
        ],
    },
]
