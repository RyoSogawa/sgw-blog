module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
    'next',
    'next/core-web-vitals',
  ],
  plugins: ['@typescript-eslint', 'react', 'tailwindcss'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ['clsx'],
      config: 'tailwind.config.js',
      prependCustom: false,
      removeDuplicates: true,
      whitelist: [],
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 2,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'object-shorthand': ['error', 'properties'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
    '@next/next/no-img-element': 'off',
  },
}
