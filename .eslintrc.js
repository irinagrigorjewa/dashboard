// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ['plugin:react/recommended',
//     'plugin:prettier/recommended'],
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: ['.eslintrc.{js,cjs}'],
//       parserOptions: {
//         sourceType: 'script',
//       },
//     },
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['react', '@typesript-eslint', 'prettier'],
//   rules: {
//     quotes: ['error', 'single'],
//     'no-duplicate-imports': 'error',
//     'max-len': ['error', 150],
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/array-type': 'off',
//     '@typescript-eslint/consistent-type-imports': 'off',
//     '@typescript-eslint/prefer-optional-chain': 'off',
//     '@typescript-eslint/strict-boolean-expressions': 'off',
//     '@typescript-eslint/restrict-template-expressions': 'off',
//     '@typescript-eslint/no-confusing-void-expression': 'off',
//   },
// };
module.exports = {
  globals: {
    JSX: true,
    React: true,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'react-app',
    'react-app/jest',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    camelcase: 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'max-len': ['error', 150],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ]
  },
};
