import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		screens: {
			ss: '320px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1440px',
			'3xl': '1530px'
		},
		height: {
			'h-100': '30rem'
		},
		fontFamily: {
			prompt: ['Prompt', 'sans-serif']
		},
		backgroundImage: {
			'cover-image':
				'url(https://npgblog.dev/static/5b3e1215fa148d9f5a3a01d4f1d51c3d/ee604/featureImage.png)'
		}
	},
	// attributify: true,
	// extract: {
	//     include: ['src/**/*.{vue,html,jsx,tsx,svlte}'],
	//     exclude: ['node_modules', '.git'],
	// },
	alias: {
		inactive: 'text-red-500 text-bold p-2',
		activated: 'text-blue-500 text-bold p-2',
		titleCard: 'mb-2 font-bold tracking-tight text-gray-900 dark:text-white',
		read_more:
			'inline-flex items-center py-1 px-2 text-xs text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
		description: 'mb-3 font-normal text-gray-700 dark:text-gray-400',
		published_date: 'top-2 right-2 text-xs absolute bg-green-500 p-1 px-2 rounded text-white block',
		author: 'bottom-4 right-4 text-xs absolute bg-green-500 p-1 px-2 rounded text-white block',
		createPost: 'rounded bg-blue-600 p-2 text-white cursor-pointer px-3',
		bgCover: 'object-cover bg-center',
		input: 'border border-gray-300 rounded-lg block w-full p-2.5',
		label: 'block mb-2 text-sm font-medium',
		primaryBtn:
			'bg-blue-600 rounded-lg text-white font-bold font-prompt w-full p-2 hover:bg-blue-800'
	},
	shortcuts: {
		active: 'bg-blue-600 rounded-lg text-white font-bold font-prompt uppercase'
	}
});
