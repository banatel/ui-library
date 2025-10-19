import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import dts from "vite-plugin-dts"
const __dirname = dirname(fileURLToPath(import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    dts({ include: ['lib'] })
  ],
  build: {
    lib: {
       entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    }
  }
})
