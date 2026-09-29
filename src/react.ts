import { fixupPluginRules } from "@eslint/compat"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import { defineConfig, globalIgnores } from "eslint/config"
import jsxA11Y from "eslint-plugin-jsx-a11y"
import prettierPluginRecommended from "eslint-plugin-prettier/recommended"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import unusedImports from "eslint-plugin-unused-imports"
import globals from "globals"

export default defineConfig([
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react: reactPlugin,
      "react-hooks": fixupPluginRules(reactHooksPlugin),
      "jsx-a11y": jsxA11Y,
      // @ts-ignore
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },

    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,
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

      "react/display-name": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],

      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "react/no-unknown-property": "error",
      "no-unused-vars": "off",
      "no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "unused-imports/no-unused-imports": "warn",
      "simple-import-sort/imports": "warn",
    },

    settings: {
      react: {
        version: "detect",
      },

      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
      },
    },
  },
  prettierPluginRecommended,
  globalIgnores(["**/node_modules", "dist/"]),
])
