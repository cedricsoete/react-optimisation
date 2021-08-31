module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': ['error', 'never', { svg: 'never', js: 'never', jsx: 'never' }],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
  },
  overrides: [
    {
      files: ['vite.config.js'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: ['cypress/**/*.js', 'src/**/*.spec.jsx'],
      plugins: [
        'cypress',
        'chai-friendly',
      ],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
      extends: [
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
      ],
      env: {
        'cypress/globals': true,
      },
      globals: {
        cy: true,
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
};
