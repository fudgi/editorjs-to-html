const babel = require("@rollup/plugin-babel")
const terser = require("@rollup/plugin-terser");
const typescript = require("@rollup/plugin-typescript");

module.exports = {
    input: "./src/app.ts",
    output: {
        file: "./build/index.js",
        format: "umd",
        name: "editorJSToHTML",
    },
    plugins: [
        typescript(),
        babel(),
        terser(),
    ],
};
