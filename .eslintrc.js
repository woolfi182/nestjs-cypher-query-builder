module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:promise/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2017,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier", "promise"],
  rules: {
    quotes: ["error", "double"],
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "prettier/prettier": "error",
    indent: ["error", 2],
    semi: ["error", "always"],
    // "comma-dangle": ["error", "always-multiline"],
    "key-spacing": ["error", { afterColon: true }],
    "no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true },
    ],
    "max-len": [
      "error",
      {
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignorePattern: "^import\\s.+\\sfrom\\s.+;$",
        code: 80,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-floating-promises": 1,
    "@typescript-eslint/no-var-requires": 0,
  },
};
