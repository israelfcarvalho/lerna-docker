const prettierConfig = require('./.prettierrc')

module.exports = {
extends: ["eslint:recommended", 'plugin:prettier/recommended'],
    env: {
        node: true,
        es7: true,
    },
    rules: {
        'prettier/prettier': ['error', 
        prettierConfig],
    },
}
