import fs from "fs";
import path from "path";

import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";
import RollupCopy from "rollup-plugin-copy";
import RollupBabel from "@rollup/plugin-babel";
import RollupTerser from "@rollup/plugin-terser";
import RollupCommonJs from "@rollup/plugin-commonjs";
import RollupResolve from "@rollup/plugin-node-resolve";
import RollupTypescript from "@rollup/plugin-typescript";

import pkg from "./package.json" assert { type: "json" };

/**
 * Configuração para realizar o build
 */
const __dir = "./src";
const __folder = fs.readdirSync(__dir).filter(file => fs.statSync(path.join(__dir, file)).isDirectory());
const __dependeciesExternal = [
    "react",
    "axios",
    "jquery",
    "react-dom",
    "bootstrap",
    "sweetalert2",
    "node-snackbar",
    "primereact/utils",
    "primereact/editor",
    "primereact/column",
    "primereact/datatable",
    "primereact/autocomplete",
    "@webdatarocks/react-webdatarocks",
    "@tiptap/starter-kit",
    "@tiptap/react",
    "@tiptap/pm",
    "@tiptap/extension-underline",
    "@tiptap/extension-text-style",
    "@tiptap/extension-link",
    "@tiptap/extension-image",
    "@tiptap/extension-highlight",
    "@tiptap/extension-color",
];

/**
 * Gera o package.json do pacote a ser publicado
 */
function addPackageJson() {
    const outputDir = path.join("./dist");
    const packageJson = `{
        "name": "${pkg.name}",
        "version": "${pkg.version}",
        "private": false,
        "author": "${pkg.author}",
        "description": "${pkg.description}",
        "repository": {
            "type": "git",
            "url": "https://github.com/Nandovga/orangesix-react.git"
        },
        "license": "MIT",
        "bugs": {
            "url": "https://github.com/Nandovga/orangesix-react/issues"
        },
        "keywords": ${JSON.stringify(pkg.keywords, null, 2)},
        "dependencies": ${JSON.stringify(pkg.dependencies, null, 2)}
    }`;
    fs.writeFileSync(path.join(outputDir, "package.json"), packageJson);
}

/**
 * Realiza a leitura da pasta "src" para gerar o build dos components
 */
const components = __folder.map(folder => {
    return {
        input: `./src/${folder}/index`,
        output: [
            {
                file: `./dist/${folder}/index.cjs.js`,
                format: "cjs",
                sourcemap: true
            },
            {
                file: `./dist/${folder}/index.esm.js`,
                format: "esm",
                sourcemap: true
            },
        ],
        external: __dependeciesExternal,
        plugins: [
            RollupBabel({
                exclude: "node_modules/**",
                babelHelpers: "bundled",
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript"
                ]
            }),
            RollupCopy({
                targets: [
                    { src: `./src/${folder}/package.json`, dest: `./dist/${folder}/` },
                    { src: `./src/${folder}/css/theme.css`, dest: `./dist/${folder}/` },
                    { src: `./src/${folder}/_${folder}.scss`, dest: `./dist/${folder}/` },
                ],
                verbose: true
            }),
            RollupTerser(),
            RollupCommonJs(),
            RollupTypescript({
                tsconfig: "./tsconfig.json",
                noEmitOnError: true
            }),
            RollupResolve({
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }),
        ]
    };
});

/**
 * Realiza a leitura da pasta "src" para gerar o index.d.ts dos components
 */
const componentsDts = __folder.map(folder => {
    return {
        input: `./src/${folder}/index.ts`,
        output: {
            file: `./dist/${folder}/index.d.ts`,
            format: "es"
        },
        plugins: [dts()]
    };
});

addPackageJson();

export default defineConfig([...components, ...componentsDts]);