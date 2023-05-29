import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.js'),
            name: 'FormBuilder',
            fileName: "form-builder",
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins:[vue()],
})