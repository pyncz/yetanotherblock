module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    '@antfu',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    next: {
      rootDir: '.',
    },
  },
  rules: {
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'eslint-comments/no-unlimited-disable': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'camelcase': 'off',
    'import/named': 'off',
    'no-useless-constructor': 'off',
    'no-control-regex': 'off',
    'no-console': 'warn',
    'arrow-parens': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
    ],
    'curly': [
      'error',
      'all',
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'react/jsx-max-props-per-line': ['error', {
      maximum: { single: 3, multi: 1 },
    }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-indent': [
      'error',
      2,
      { indentLogicalExpressions: true },
    ],
    'react/jsx-indent-props': ['error', 2],
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }],
  },
}
