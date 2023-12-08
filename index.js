module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
    node: true,
    es6: true,
    commonJS: true
  },
  plugin: ["@stylistic"],
  extends: ["plugin:@stylistic/eslint-recommencd", "eslint:recommended", "airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    '@stylistic/template-curly-spacing': ['error', 'always'],
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/jsx-curly-spacing': [2, 'always', { objectLiterals: 'never' }],
    '@stylistic/template-curly-spacing': ['error', 'always'],
  }
}