import fs from "fs";
import path from "path";

import { defineConfig } from "rollup";
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
    "@stitches/react",
    "primereact/avatar"
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
        "keywords": [
            "react",
            "primereact",
            "ui-kit",
            "ui library",
            "component library"
        ],
        "dependencies": {
            "@stitches/react": "^1.2.8",
            "axios": "^1.7.2",
            "bootstrap": "^5.3.3",
            "jquery": "^3.7.1",
            "node-snackbar": "^0.1.16",
            "primereact": "^10.6.6",
            "react": "^18.0.0",
            "react-dom": "^18.0.0",
            "sweetalert2": "^11.11.1"
        }
    }`;
    fs.writeFileSync(path.join(outputDir, "package.json"), packageJson);
}

/**
 * Realiza a leitura da pasta "src" para gerar o build dos components
 */
const components = __folder.map(folder => {
    return {
        input: `./src/${folder}/index.ts`,
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
            RollupResolve({
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }),
            RollupCommonJs(),
            RollupTypescript({ tsconfig: "./tsconfig.json" }),
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
                    { src: `./src/${folder}/css`, dest: `./dist/${folder}` },
                    { src: `./src/${folder}/scss`, dest: `./dist/${folder}` },
                    { src: `./src/${folder}/package.json`, dest: `./dist/${folder}/` },
                    { src: `./src/${folder}/@types/index.d.ts`, dest: `./dist/${folder}` },
                ],
                verbose: true
            }),
            RollupTerser()
        ]
    };
});

addPackageJson();
export default defineConfig([...components]);