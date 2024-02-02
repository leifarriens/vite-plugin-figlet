import { defineConfig } from 'vite';
import figlet from 'vite-plugin-figlet';

export default defineConfig({
  plugins: [figlet(['Vite', 'Plugin', 'Figlet'])],
});
