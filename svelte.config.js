import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-vercel';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			preserve: ['module']
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$stores: resolve('./src/stores'),
					$actions: resolve('./src/actions')
				}
			}
		}
	}
};

export default config;
