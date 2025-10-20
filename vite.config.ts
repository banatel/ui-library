/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from "vite-plugin-dts";
import { resolve, dirname, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { glob } from "glob";
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const __filename = fileURLToPath(import.meta.url);

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const __dirname = dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({
    include: ['lib']
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      // ✅ avoid bundling React
      input: Object.fromEntries(glob.sync("lib/**/*.{ts,tsx}", {
        ignore: ["lib/**/*.d.ts", "lib/**/*.stories.tsx", "lib/main.ts"]
      }).map(file => [relative("lib", file.slice(0, file.length - extname(file).length)), fileURLToPath(new URL(file, import.meta.url))])),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(__dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});