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
        'plugin:prettier/recommended',
    ],
    rules: {
        'jsx-a11y/anchor-is-valid': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-anonymous-default-export': 'off',
        'no-duplicate-imports': 'warn',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-tabs': 'off',
        // { "allowIndentationTabs": true }
        // "no-confusing-arrow": ["warning", { "allowParens": false }]
    },
    ignorePatterns: ['node_modules/', 'dist/'],
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
