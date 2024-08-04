import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ command }) => {
  return {
    base: command === 'serve' ? '' : '/my-svelte-project/',
    plugins: [svelte()]
  }
});
