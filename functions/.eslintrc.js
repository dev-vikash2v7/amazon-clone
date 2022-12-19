module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  parser: "@babel/eslint-parser", // This line is required to fix "unexpected token" errors
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ["@babel/preset-env"],
    },
  },
  rules: {
    "quotes": ["error", "double"],
    "max-len": "off",
  },
};

// "parser": "@babel/eslint-parser",
// "sourceType": "module",
// "ecmaVersion": "latest",
// "ecmaFeatures": {
//   "jsx": true,
//   "experimentalObjectRestSpread": true
// },
// "requireConfigFile": false
