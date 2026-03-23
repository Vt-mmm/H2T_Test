import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
      common: fileURLToPath(new URL('./src/common', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      constants: fileURLToPath(new URL('./src/constants', import.meta.url)),
      data: fileURLToPath(new URL('./src/data', import.meta.url)),
      hooks: fileURLToPath(new URL('./src/hooks', import.meta.url)),
      layouts: fileURLToPath(new URL('./src/layouts', import.meta.url)),
      locales: fileURLToPath(new URL('./src/locales', import.meta.url)),
      pages: fileURLToPath(new URL('./src/pages', import.meta.url)),
      redux: fileURLToPath(new URL('./src/redux', import.meta.url)),
      routes: fileURLToPath(new URL('./src/routes', import.meta.url)),
      sections: fileURLToPath(new URL('./src/sections', import.meta.url)),
      theme: fileURLToPath(new URL('./src/theme', import.meta.url)),
      types: fileURLToPath(new URL('./src/types', import.meta.url)),
      utils: fileURLToPath(new URL('./src/utils', import.meta.url)),
    },
  },
  plugins: [react()],
});
