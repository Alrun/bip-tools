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
        // "plugin:react/recommended",
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
        // "prefer-arrow-callback": [ "off", { "allowNamedFunctions": true } ],
        // "no-param-reassign": "off",
        // "react/jsx-props-no-spreading": "off",
        // "consistent-return": ["warn", { "treatUndefinedAsUnspecified": true }],
        // TODO: Add react props
        "react/require-default-props": ["off", {"forbidDefaultForRequired": false, "ignoreFunctionalComponents": true}],
        "react/prop-types": "off",
        "spaced-comment": "warn",
        "react/jsx-props-no-spreading": "warn",
        // "jsx-a11y/label-has-associated-control": [ "error", {
        //     "required": {
        //         "some": [ "nesting", "id"  ]
        //     }
        // }],
        // 'max-len': [0, {'code': 120}],
        // "jsx-a11y/label-has-for": [ "error", {
        //     "required": {
        //         "some": [ "nesting", "id"  ]
        //     }
        // }]
    },
    // "eslintConfig": {
    //     "extends": [
    //         "react-app",
    //         "react-app/jest"
    //     ],
    //     "overrides": [
    //         {
    //             "files": [
    //                 "**/*.stories.*"
    //             ],
    //             "rules": {
    //                 "import/no-anonymous-default-export": "off"
    //             }
    //         }
    //     ]
    // },
    "overrides": [
        {
            "files": [
                "**/*.stories.*"
            ],
            "rules": {
                "import/no-anonymous-default-export": "off"
            }
        }
    ]
}
