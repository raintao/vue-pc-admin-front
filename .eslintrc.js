module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    env: {
        browser: true,
    },
    extends: [
        "plugin:vue/essential",
        "standard"
    ],
    plugins: [
        "vue"
    ],
    rules: {
        "generator-star-spacing": "off",
        "indent": [1, 4, {
            "SwitchCase": 1
        }],
        "space-before-function-paren": [0, "always"],
        "space-infix-ops": [2, { "int32Hint": false }],
        "no-multi-spaces": [0],
        "no-unused-vars": [0],
        "no-multiple-empty-lines": [0],
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
}
