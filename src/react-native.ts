import { defineConfig } from "eslint/config"

import { reactConfig } from "./react.js"

export default defineConfig([
  ...reactConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      globals: {
        __DEV__: "readonly",
      },
    },

    rules: {
      "@typescript-eslint/no-require-imports": "off",
    }
  },
])