export default [
  { ignores: ["**/dist/**", "**/.next/**", "**/build/**", "**/node_modules/**", "**/.turbo/**"] },
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        es2022: true,
        node: true,
        React: "writable",
        JSX: "writable",
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ["./tsconfig.json", "./packages/*/tsconfig.json"],
      },
    },
    settings: {
      react: { version: "19" },
      "import/resolver": { typescript: { alwaysTryTypes: true } },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      "tailwindcss": require("eslint-plugin-tailwindcss"),
      "unused-imports": require("eslint-plugin-unused-imports"),
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],
      "tailwindcss/no-custom-classname": "warn",
      "tailwindcss/enforces-shorthand": "error",
    },
  },
  {
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}", "**/*.stories.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];