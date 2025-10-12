import eslintJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import eslintTs from "typescript-eslint";

export default defineConfig(
  [
    globalIgnores([
      "**/node_modules/**",
      "**/dist/**",
      "**/cache/**",
      "**/out/**",
      "**/output/**",
      "**/test/**",
      "**/*-lock.*"
    ])
  ],
  [
    {
      files: ["**/**.{js,ts}"],
      extends: [
        eslintJs.configs.recommended,
        ...eslintTs.configs.recommended,
        eslintConfigPrettier
      ],
      plugins: {
        prettier: eslintPluginPrettier
      },
      languageOptions: {
        parser: eslintTs.parser,
        globals: globals.browser,
        parserOptions: {
          sourceType: "module"
        }
      },
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            ignoreRestSiblings: true
          }
        ],
        "eol-last": ["warn", "always"],
        "@typescript-eslint/no-explicit-any": "off"
      }
    }
  ]
);
