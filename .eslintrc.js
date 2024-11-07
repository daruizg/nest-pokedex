module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',

    // Require explicit return types on functions and methods to ensure clarity
    '@typescript-eslint/explicit-function-return-type': 'error',

    // Require explicit return types on exported functions and module boundaries for maintainability
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // Disallow the use of `any` type to encourage type-safe code
    '@typescript-eslint/no-explicit-any': 'error',

    // Require explicit accessibility modifiers on all class members
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public', // Constructor access defaults to public, so no need to specify
        },
      },
    ],

    // Additional recommended best practices:

    // Enforce consistent spacing in template strings to avoid accidental whitespace
    'template-curly-spacing': ['error', 'never'],

    // Enforce single quotes to ensure consistency and readability
    quotes: ['error', 'single', { avoidEscape: true }],

    // Disallow unused variables to keep the code clean
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // Enforce camelCase naming convention for readability
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
    ],
  },
};
