import eslint from "@eslint/js"
import eslintConfigPrettierRecommended from "eslint-config-prettier/recommended"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
    { ignores: ["dist"] },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettierRecommended,
    reactHooks.configs["recommended-latest"],
    reactRefresh.configs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            "react-hooks/react-compiler": "error",
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "prettier/prettier": "error",
        },
    },
)
