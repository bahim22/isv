module.exports = {
    env: {
        browser: true,
        es2021: true,
        // "node": true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            // "modules": true,
            // "version": "2021"
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['import', 'react', 'jsx-a11y', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended'
    ],
    rules: {
        'jsx-a11y/anchor-is-valid': 'warn',
        'react/react-in-jsx-scope': 'warn',
        'import/no-anonymous-default-export': 'warn',
        'no-duplicate-imports': 'warn',
        'no-unused-vars': 'off',
        'no-undef': 'warn',
        'no-tabs': 'warn',
        // "no-confusing-arrow": ["warning", { "allowParens": true }]
    },
    ignorePatterns: ['node_modules/', 'dist/', 'build/', '*.env'],
    settings: {
        env: {
            NODE_ENV: 'local',
            production: true,
        },
        react: {
            version: 'detect',
        },
    },
};
