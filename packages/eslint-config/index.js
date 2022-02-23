const prettierConfig = require('./.prettierrc.json')

module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:json/recommended', 'plugin:@typescript-eslint/recommended'],
    env: {
        es6: true,
        node: true,
    },
    plugins: ["prettier", "@typescript-eslint"],
    rules: {
        'no-unused-vars': 'warn',
        'prettier/prettier': ['error', prettierConfig],
    },
}
