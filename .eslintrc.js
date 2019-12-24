module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    jest: true
  },
  rules: {
    'no-restricted-syntax': ['error', 'ForInStatement'], // Allow for of loops @see https://github.com/airbnb/javascript/issues/1122
    'object-curly-spacing': ['error', 'never'],
    '@typescript-eslint/explicit-function-return-type': ['off'], // Conflict with no-useless-return
    '@typescript-eslint/no-explicit-any': ["error", {ignoreRestArgs: true}],
  },
};
