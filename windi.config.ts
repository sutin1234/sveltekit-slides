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
        active: "bg-blue-400 rounded-lg text-white font-weight"
    },
    shortcuts: {
        active: "bg-blue-400 rounded-lg text-white font-weight"
    }
});