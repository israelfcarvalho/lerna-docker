const prettierConfig = require('./.prettierrc.json')

module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:json/recommended'],
    env: {
        es6: true,
        node: true,
    },
    rules: {
        'no-unused-vars': 'warn',
        'prettier/prettier': ['error', prettierConfig],
    },
}
