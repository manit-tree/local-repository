import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: './dist',
        minify: false,
        sourcemap: false,
        emptyOutDir: true,   

        lib: {
            entry: './src/index.ts',
            name:'reactivate',
            formats: ['iife','cjs','es'],
            fileName: (format) => `[name].[format].js`
        }
    }
})