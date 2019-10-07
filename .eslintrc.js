module.exports = {
    extends: [
      "standard"
    ],
    parserOptions: {
      ecmaVersion: 2017,
      parser: 'babel-eslint',
      sourceType: 'module',
    },
    rules: {
      semi: "error",
      quotes: ["error", "double"]
    },
    env: {
      browser: true,
      node: true
    },
    
  };