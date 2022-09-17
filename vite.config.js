import { sveltekit } from "@sveltejs/kit/vite";
import WindiCSS from "vite-plugin-windicss";
import { imagetools } from "vite-imagetools";
import path from "path";

/** @type {import('vite').UserConfig} */
const config = {
        plugins: [sveltekit(), WindiCSS(), imagetools({ force: true })],
        optimizeDeps: {
                // include: ['highlight.js/lib/core', 'prism-svelte']
        },
        resolve: {
                alias: {
                        $utils: path.resolve("./src/utils"),
                        // $lib: path.resolve('./src/lib'),
                        $assets: path.resolve("./src/assets"),
                },
        },
        build: {
                // chunkSizeWarningLimit: 10000
        },
        proxy: {
                "/api": {
                        target: "http://jsonplaceholder.typicode.com",
                        changeOrigin: true,
                        rewrite: (path) => path.replace(/^\/api/, ""),
                },
        },
};

export default config;
