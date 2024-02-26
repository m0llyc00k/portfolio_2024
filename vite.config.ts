import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
	return {
	  base: mode === 'development' ? '/' : 'https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/305304fb2d7f58164d9c1af5ae652a5aa9e875f0/src/lib/assets/img/',
	  plugins: [sveltekit()]
	};
  });
