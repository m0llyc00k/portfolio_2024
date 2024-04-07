import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite'; // Import sveltekit from @sveltejs/kit/vite

export default defineConfig({
  plugins: [sveltekit()] // Use sveltekit as a plugin
});
