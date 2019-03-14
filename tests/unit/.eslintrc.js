module.exports = {
  env: {
    jest: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'never'],
    'no-console': 'error',
    'no-debugger': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
        ],
        paths: [
          './',
        ],
      },
    },
  },
};
