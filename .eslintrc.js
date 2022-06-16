module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: "module"
    },
    plugins: [
        "react", "@typescript-eslint", "prettier"
    ],
    extends: [
        "airbnb",
        "airbnb-typescript",
        "prettier"
    ],
    rules: {
        "prettier/prettier": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-param-reassign": ["error", {"props": false}],
        "react/function-component-definition": "off",
        "import/no-cycle": ["off", {
            "patterns": ["./src/redux/**/*.ts"]
        }],
        "prefer-numeric-literals": "off",
        "import/order": "warn",
        "react/require-default-props": ["off", {"forbidDefaultForRequired": false, "ignoreFunctionalComponents": true}],
        "react/prop-types": "off",
        "spaced-comment": "warn",
        "react/jsx-props-no-spreading": "off",
    },
    "overrides": [
        {
            "files": [
                "**/*.stories.*"
            ],
            "rules": {
                "import/no-anonymous-default-export": "off"
            }
        },
        {
            "files": ["./src/setupTests.ts"],
            "rules": {
                "import/no-extraneous-dependencies": "off"
            },
        },
    ]
}
