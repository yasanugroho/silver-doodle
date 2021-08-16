module.exports = {
  root: true,
  extends: ['next', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'react-native/no-inline-styles': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 0,
  },
};
