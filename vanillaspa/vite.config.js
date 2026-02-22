import { defineConfig } from "vite";
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
    build: {
        target: 'esnext'
    },
    server: {
        port: 5173,
        host: '0.0.0.0', // Allow access from outside the container
        strictPort: true,
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin', // for sqlite OPFS
            'Cross-Origin-Embedder-Policy': 'require-corp' // for sqlite OPFS
        },
        hmr: {
            host: 'localhost',
            protocol: 'wss'
        },
    },
    optimizeDeps: {
        exclude: ['@sqlite.org/sqlite-wasm']
    },
    plugins: [
        basicSsl()
    ]
})