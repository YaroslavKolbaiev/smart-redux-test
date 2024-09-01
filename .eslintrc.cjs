module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.app.json',
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    "react/jsx-newline": 2,
    'no-param-reassign': [2, { "props": false }],
    'react/jsx-max-props-per-line': [2, { "maximum": 1, "when": "always" }],
    'react/jsx-props-no-spreading': 0,
  }
}
