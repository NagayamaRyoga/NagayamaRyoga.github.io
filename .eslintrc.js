module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue'],
  rules: {
    semi: [2, 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
  },
};
