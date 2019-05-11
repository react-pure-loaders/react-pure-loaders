module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'jest': true
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'jest', 'import'],
  settings: {
    'import/resolver': {
      node: {
        'extensions': ['.js', '.jsx', '.ts', '.tsx',]
      }
    },
    rules: {},
  }
};
