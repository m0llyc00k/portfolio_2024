import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		// Add a custom resolver for .node files
		extensions: ['.mjs', '.js', '.json', '.node', '.ts']
	},
	optimizeDeps: {
		exclude: ['fsevents']
	  },
	plugins: [sveltekit()]
});
