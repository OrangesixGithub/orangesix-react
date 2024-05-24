import fs from "fs";
import path from "path";
import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json" assert { type: "json" };

/**
 * Configuração para realizar o build
 */
const __dir = "./src";
const __folder = fs.readdirSync(__dir).filter(file => fs.statSync(path.join(__dir, file)).isDirectory());
const __dependeciesExternal = ["axios", "jquery", "sweetalert2", "node-snackbar"];

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
            "axios": "^1.7.2",
            "jquery": "^3.7.1",
            "node-snackbar": "^0.1.16",
            "primereact": "^10.6.6",
            "react": "^18.0.0",
            "react-dom": "^18.0.0",
            "sweetalert2": "^11.11.0"
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
            },
            {
                file: `./dist/${folder}/index.esm.js`,
                format: "esm",
            },
        ],
        external: __dependeciesExternal,
        plugins: [
            typescript({ tsconfig: "./tsconfig.json" }),
            copy({
                targets: [
                    { src: `./src/${folder}/@types/index.d.ts`, dest: `./dist/${folder}` },
                    { src: `./src/${folder}/package.json`, dest: `./dist/${folder}/` }
                ],
                verbose: true
            })
        ]
    };
});

addPackageJson();
export default defineConfig([...components]);