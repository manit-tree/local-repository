import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    css: {
        transformer: 'lightningcss',
    },
    build: {
        outDir: './dist',
        minify: true,
        sourcemap: false,
        emptyOutDir: true,   
        lib: {
            entry: './src/sortable.complete.esm.js',
            formats: ['es'],
            fileName: (format) => `index.js`
        }
    },    
})