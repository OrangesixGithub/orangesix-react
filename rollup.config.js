import fs from "fs";
import path from "path";
import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
import typescript from "rollup-plugin-typescript2";

const __dir = "./src";
const __folder = fs.readdirSync(__dir).filter(file => fs.statSync(path.join(__dir, file)).isDirectory());

const configs = __folder.map(folder => defineConfig({
    input: `./src/${folder}/index.ts`,
    output: [
        {
            file: `./dist/${folder}/index.cjs.js`,
            format: "cjs",
        },
        {
            file: `./dist/${folder}/index.js`,
            format: "esm",
        },
    ],
    external: ["axios"],
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json",
            useTsconfigDeclarationDir: true
        }),
        copy({
            targets: [
                { src: `./src/${folder}/@types/index.d.ts`, dest: `./dist/${folder}/` }
            ],
            verbose: true
        })
    ]
}));

export default configs;