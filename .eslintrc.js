module.exports = {
  "plugins": ["node"],
  "extends": "google",
  "parserOptions": {
    "ecmaVersion": 6
  },
  "rules": {
    "prefer-const": ["error"],
    "max-len": ["warn"],
    "node/exports-style": ["error", "module.exports"]
  }
};
