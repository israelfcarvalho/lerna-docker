// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig = require('./.prettierrc.json')

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    es6: true,
    node: true,
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'error',
    'prettier/prettier': ['error', prettierConfig],
    '@typescript-eslint/padding-line-between-statements': 'error',
  },
}
