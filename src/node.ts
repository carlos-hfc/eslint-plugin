import { defineConfig, globalIgnores } from "eslint/config"
import prettierPluginRecommended from "eslint-plugin-prettier/recommended"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import unusedImports from "eslint-plugin-unused-imports"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  prettierPluginRecommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],

    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },

    rules: {
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "avoid",
          endOfLine: "auto",
          printWidth: 80,
          semi: false,
          singleAttributePerLine: true,
          tabWidth: 2,
        },
      ],

      "no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",

      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": "warn",

      "unused-imports/no-unused-imports": "warn",
    },
  },
  globalIgnores(["**/node_modules", "dist", "build"]),
])