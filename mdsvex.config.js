import containers from 'remark-containers';
import github from 'remark-github';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import hljs from 'highlight.js';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function highlighter(str, lang) {
	// return `<pre data-language="${lang}"><code>${str}</code></pre>`;
	if (lang && hljs.getLanguage(lang)) {
		try {
			return hljs.highlight(lang, str).value;
			// eslint-disable-next-line no-empty
		} catch (__) {}
	}
	return '';
}

const config = {
	// layout: './src/lib/blog/layouts.svelte',
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
		alias: { javascript: 'js' },
		highlighter
	}
};

export default config;
