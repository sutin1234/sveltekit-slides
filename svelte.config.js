import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import vercelAdapter from '@sveltejs/adapter-vercel';
import path from 'path';
import { imagetools } from 'vite-imagetools';

const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: vercelAdapter(),
		vite: {
			plugins: [WindiCSS(), imagetools({ force: true })],
			optimizeDeps: {
				include: ['highlight.js/lib/core', 'prism-svelte']
			},
			resolve: {
				alias: {
					$utils: path.resolve('./src/utils'),
					$lib: path.resolve('./src/lib'),
					$assets: path.resolve('./src/assets')
				}
			}
		}
	}
};

export default config;
