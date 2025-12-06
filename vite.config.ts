import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base: ./' assure que les liens vers les fichiers JS/CSS sont relatifs.
  // Cela permet au site de fonctionner même s'il est dans un sous-dossier sur le FTP.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
});