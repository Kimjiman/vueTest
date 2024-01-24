import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        proxy: {
            // 프록시할 경로 설정
            '/api': {
                target: 'localhost:8080', // 실제 API 서버 주소
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''), // 경로 재작성
            },
        },
    },
});
