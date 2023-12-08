module.exports = {
  extends: [
    './eslint-config-airbnb-base/index',
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    es6: true,
    commonJS: true,
  },
  plugins: ['@stylistic'],
  rules: {
    indent: ['error', 2],
    '@stylistic/indent': ['error', 2],
    '@stylistic/template-curly-spacing': ['error', 'always'],
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/jsx-curly-spacing': [2, 'always', { objectLiterals: 'never' }],
    '@stylistic/template-curly-spacing': ['error', 'always'],
  },
}
