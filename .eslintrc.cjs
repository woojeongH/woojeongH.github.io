module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "plugin:valtio/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "valtio/state-snapshot-rule": "warn",
    "valtio/avoid-this-in-proxy": "warn",
  },
}
