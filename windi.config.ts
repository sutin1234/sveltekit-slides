import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    heme: {
        screens: {
            small: '320px'
        },
    },
    // attributify: true,
    // extract: {
    //     include: ['src/**/*.{vue,html,jsx,tsx,svlte}'],
    //     exclude: ['node_modules', '.git'],
    // },
    alias: {
        inactive: "text-red-500 text-bold p-2",
        activated: 'text-blue-500 text-bold p-2'
    },
    shortcuts: {
        active: "bg-blue-400 rounded-lg text-white font-weight"
    }
});