module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
    node: true,
    es6: true,
    commonJS: true,
    jest: true
  },
  plugin: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended", "airbnb"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
      "rules": {
        "template-curly-spacing": ["error", "always"],
        "prettier/prettier": ["warn", { "bracketSpacing": "ignore" }],
        "semi": 0,
        "arrow-parens": ["error", "as-needed"]
      }
    }
  ]
}
