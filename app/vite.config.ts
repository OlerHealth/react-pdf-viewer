import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'pdfjs-dist/build/pdf.worker.min.mjs': path.resolve(__dirname, 'src/pdfjs/pdf.worker.min.mjs')
    }
  }
})
