import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import react from 'eslint-plugin-react'

export default tseslint.config({
    extends: [
        js.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
        prettierConfig,
    ],
    files: ['**/*.{ts,tsx}'],
    ignores: ['dist'],
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        react,
    },
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'arrow-body-style': ['error', 'as-needed'],
        curly: ['error', 'all'],
        eqeqeq: 'error',
        'linebreak-style': ['error', 'unix'],
        'no-console': 'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                next: '*',
                prev: ['const'],
            },
            {
                blankLine: 'any',
                next: ['const'],
                prev: ['const'],
            },
            {
                blankLine: 'always',
                next: 'return',
                prev: '*',
            },
        ],
        'prefer-destructuring': [
            'error',
            {
                array: true,
                object: true,
            },
        ],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: false,
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: true,
            },
        ],
        ...reactHooks.configs.recommended.rules,
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
    },
})
