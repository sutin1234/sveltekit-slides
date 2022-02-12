import containers from 'remark-containers';
import github from 'remark-github';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function highlighter(code) {
	return `<pre><code>${code}</code></pre>`;
}

const config = {
	layout: './src/lib/blog/layouts.svelte',
	extensions: ['.svelte.md', '.md', '.svx'],
	// frontmatter: {
	// 	marker: "-"
	// },
	smartypants: {
		dashes: 'oldschool',
		backticks: true,
		quotes: true
	},

	remarkPlugins: [[containers, github]],
	rehypePlugins: [],
	highlight: {
		// alias: { javascript: 'js', typescript: 'ts' },
		alias: { yavascript: 'javascript' }
		// highlighter
	}
};

export default config;
