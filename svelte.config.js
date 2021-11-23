import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss'
// import staticAdapter from '@sveltejs/adapter-static'
import vercel from '@sveltejs/adapter-vercel';



const config = {
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		adapter: vercel(),
		vite: {
			plugins: [
				WindiCSS()
			]
		}
	}
};

export default config;
