module.exports = {
    extends: ["react-app", "plugin:prettier/recommended"],
    rules: {
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-console": 0,
        "prettier/prettier": [
            "error",
            {
                singleQuote: true, //使用单引号
            },
        ],
    },
};