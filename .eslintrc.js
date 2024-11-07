module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // Type Safety & Explicit Typing (C#-like)
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',

    // Access Modifiers (C#-like)
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
          accessors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],

    // Naming Conventions (C#-like)
    '@typescript-eslint/naming-convention': [
      'error',
      // Interface prefixing (I prefix like C#)
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      // Class naming (PascalCase like C#)
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      // Property naming (cammelCase for public, _camelCase for private like C#)
      {
        selector: 'property',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'property',
        modifiers: ['public'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      // Variable naming (camelCase)
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      // Parameter naming (camelCase)
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      // Enum naming (PascalCase like C#)
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      // Enum member naming (PascalCase like C#)
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
    ],

    // Code Style
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          // Fields
          'private-static-field',
          'public-static-field',
          'private-instance-field',
          'public-instance-field',
          // Constructors
          'constructor',
          // Methods
          'public-static-method',
          'private-static-method',
          'public-instance-method',
          'private-instance-method',
        ],
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'template-curly-spacing': ['error', 'never'],
  },
};
