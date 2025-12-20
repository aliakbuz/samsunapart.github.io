import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Custom domain için root path
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
