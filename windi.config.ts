import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    theme: {
        screens: {
            small: '320px'
        },
        height: {
            'h-100': '30rem',
        },
    },
    // attributify: true,
    // extract: {
    //     include: ['src/**/*.{vue,html,jsx,tsx,svlte}'],
    //     exclude: ['node_modules', '.git'],
    // },
    alias: {
        inactive: "text-red-500 text-bold p-2",
        activated: 'text-blue-500 text-bold p-2',
        titleCard: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
        read_more: "inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        description: "mb-3 font-normal text-gray-700 dark:text-gray-400",
        published_date: "top-2 right-2 text-xs absolute bg-green-500 p-1 px-2 rounded text-white block",
        author: "bottom-4 right-4 text-xs absolute bg-green-500 p-1 px-2 rounded text-white block",
        createPost: "absolute bottom-2 right-2 rounded bg-blue-600 p-2 text-white cursor-pointer px-3"
    },
    shortcuts: {
        active: "bg-blue-400 rounded-lg text-white font-weight"
    }
});