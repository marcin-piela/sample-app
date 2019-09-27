module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'react-app',
    'airbnb',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/prefer-interface': 0,
    'jsx-a11y/label-has-for': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': ['error', {'declaration': false, 'assignment': false}],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
        tabWidth: 2,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'parent', ['index', 'internal', 'sibling']],
        'newlines-between': 'always',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['return', 'if', 'switch'] },
    ],
    'brace-style': ["error", "1tbs", { "allowSingleLine": false }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: '*.types.ts',
      rules: {
        camelcase: 0,
      },
    },
  ],
};
