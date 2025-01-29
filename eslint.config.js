import TSStylistic from "@stylistic/eslint-plugin-ts";
import TSEslintParse from "@typescript-eslint/parser";
import JSXStylistic from "@stylistic/eslint-plugin-jsx";
import TSEslint from "@typescript-eslint/eslint-plugin";

export default [{
    name: "eslint",
    files: [
        "**/*.js",
        "**/*.jsx",
        "**/*.ts",
        "**/*.tsx"
    ],
    ignores: [
        "dist/**",
        "doc/**",
        "node_modules/**",
        "rollup.config.js",
        "**/*.config.js"
    ],
    languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: TSEslintParse,
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    plugins: {
        "@stylistic/ts": TSStylistic,
        "@stylistic/jsx": JSXStylistic,
        "@typescript-eslint": TSEslint,
    },
    rules: {
        //Typescript
        "@stylistic/ts/semi": ["error"],
        "@stylistic/ts/quotes": ["error", "double"],
        "@stylistic/ts/block-spacing": ["error", "always"],
        "@stylistic/ts/object-curly-spacing": ["error", "always"],

        //JSX
        "@stylistic/jsx/jsx-indent": [2, 4],
        "@stylistic/jsx/jsx-indent-props": [2, "first"],
        "@stylistic/jsx/jsx-max-props-per-line": ["error", { "maximum": 1 }],
        "@stylistic/jsx/jsx-tag-spacing": ["error", {
            closingSlash: "never",
            afterOpening: "never",
            beforeClosing: "never",
            beforeSelfClosing: "never",
        }],
        "@stylistic/jsx/jsx-closing-bracket-location": ["error", "after-props"],
        "@stylistic/jsx/jsx-sort-props": ["error", {
            ignoreCase: true,
            multiline: "first",
            callbacksLast: true,
            shorthandFirst: true,
            locale: "auto",
        }],
        "@stylistic/jsx/jsx-curly-brace-presence": ["error", "never"],
        "@stylistic/jsx/jsx-props-no-multi-spaces": ["error"]
    },
}];
