import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*']
				// exclude: ['<all>']
			}
			// platformProxy: {
			// 	configPath: 'wrangler.toml',
			// 	environment: undefined,
			// 	experimentalJsonConfig: false,
			// 	persist: false
			// }
		})
	}
};

export default config;
