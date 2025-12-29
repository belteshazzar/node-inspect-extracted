// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/inspect.js'), // Your library's entry point
      name: 'util', // The global variable name in UMD/IIFE builds
      fileName: (format) => `util.${format}.js` // Naming convention
    },
    rollupOptions: {
      // Ensure peer dependencies (like React, Vue) are externalized
      external: ['react', 'vue'], // Add any external dependencies here
      output: {
        // Optional: you can manually specify output formats if needed
        // globals: { react: 'React' }, // Map external ids to global names
      }
    }
  }
});
