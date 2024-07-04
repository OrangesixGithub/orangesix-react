import * as path from "path";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import viteDynamicImport from "vite-plugin-dynamic-import";

export default defineConfig({
    plugins: [
        viteReact(),
        viteDynamicImport({})
    ],
    resolve: {
        alias: {
            "@orangesix": path.resolve(__dirname, "../dist"),
        }
    }
});
