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
    commonJS: true
  },
  plugins: [
    '@stylistic'
  ],
  rules: {
    'indent': ['error', 2],
    '@stylistic/indent': ['error', 2]
  }
}