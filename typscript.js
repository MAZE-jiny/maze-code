module.exports = {  
  parser: "@typescript-eslint/parser",  
  parserOptions: {  
    project: ["./tsconfig.json"],  
  },  
  plugins: ["@typescript-eslint"],  
  extends: [  
    "plugin:@typescript-eslint/eslint-recommended",  
    // airbnb-typescript
    "airbnb-typescript/base",
    // airbnb-typescript + react
    "airbnb-typescript",  
  ],  
};