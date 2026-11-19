import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import prettierPluginRecommended from "eslint-plugin-prettier/recommended"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import unusedImports from "eslint-plugin-unused-imports"

export default defineConfig([
  prettierPluginRecommended,
  ...nextVitals,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],

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

      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

      "unused-imports/no-unused-imports": "warn",
    },
  },
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
])