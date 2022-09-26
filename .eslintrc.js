module.exports = {
  root: true,
  extends: [
    'plugin:tailwindcss/recommended',
    'airbnb',
    'airbnb-typescript',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks', 'storybook', 'tailwindcss'],
  settings: {
    react: {
      version: '18',
    },
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ['cn'],
      config: 'tailwind.config.js',
      prependCustom: false,
      removeDuplicates: true,
      whitelist: [],
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.*', '*.config.js', '.storybook/**', 'theme/**'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 2,
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        shorthandLast: true,
        callbacksLast: true,
        multiline: 'ignore',
        ignoreCase: false,
        noSortAlphabetically: true,
        reservedFirst: ['key', 'ref'],
      },
    ],
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'index',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '{react,react-dom}',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/space-before-blocks': 'off',
    'arrow-body-style': 'off',
    'object-shorthand': ['error', 'properties'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-continue': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-exports': 'off',
    'no-alert': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
    '@next/next/no-img-element': 'off',
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.stories.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        'max-lines': 'off',
        'no-console': 'off',
      },
    },
  ],
};
