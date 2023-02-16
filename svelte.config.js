import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import vercelAdapter from '@sveltejs/adapter-vercel';

const config = {
	// extensions: ['.svelte', ...mdsvexConfig.extensions],
	// preprocess: [preprocess(), mdsvex(mdsvexConfig)],
	preprocess: [preprocess()],

	kit: {
		adapter: vercelAdapter()
	}
};

export default config;
