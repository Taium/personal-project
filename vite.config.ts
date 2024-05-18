import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3000,
  },
  server: {
    proxy: {
      '/api': {
        target: "http://103.125.254.108:1111",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // You can add more proxy settings here if needed
    },
  },
});
