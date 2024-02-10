const babel = require("@rollup/plugin-babel")
const terser = require("@rollup/plugin-terser");
const typescript = require("@rollup/plugin-typescript");

module.exports = {
    input: "./src/app.ts",
    output: [{
            file: "./build/Parser.node.js",
            format: "cjs",
            name: "edjsParser",
        },
        {
            file: "./build/Parser.esm.js",
            format: "esm",
            name: "edjsParser",
        },
        {
            file: "./build/Parser.browser.js",
            format: "iife",
            name: "edjsParser",
        },
    ],
    plugins: [
        typescript(),
        babel(),
        terser(),
    ],
};
