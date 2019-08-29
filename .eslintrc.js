module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  globals: {
    __DEV__: true,
  },
  env: {
    'jest/globals': true,
  },
  plugins: ['prettier', 'jest'],
  rules: {
    'arrow-parens': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'prefer-destructuring': [
      'error',
      {
        object: true,
      },
    ],
    'no-console': 0,
    'import/no-cycle': 0,
  },
};
