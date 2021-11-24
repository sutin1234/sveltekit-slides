
import containers from "remark-containers";
// import github from "remark-github";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function highlighter(code) {
	return `<pre><code>${code}</code></pre>`;
}

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
		backticks: true,
		quotes: true
	},

	remarkPlugins: [containers],
	rehypePlugins: [],
	highlight: {
		alias: { javascript: "javascript" },
		highlighter
	}
};

export default config;
