import eslintJs from "@eslint/js";
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
      extends: [eslintJs.configs.recommended, ...eslintTs.configs.recommended],
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
        "eol-last": ["warn", "always"]
      }
    }
  ]
);
