module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "useTabs": false,
        "printWidth": 120,
        "trailingComma": "all",
        "arrowParents": "avoid",
        "proseWrap": "always",
        "semi": true,
        "tabWidth": 4,
        "singleAttributePerLine": true,
      }
    ]
  },
};
