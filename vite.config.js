import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { fileURLToPath } from 'url';
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$src: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
			$stores: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src', 'stores'),
			$actions: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src', 'actions'),
			$components: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src', 'components')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
