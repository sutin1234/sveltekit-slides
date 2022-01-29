<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import { seo } from '$lib/store/seo';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/src/languages/typescript';
	import github from 'svelte-highlight/src/styles/github';
	import 'svelte-highlight/src/styles/atom-one-dark.css';

	// update SEO
	$seo.title = 'Thinny.dev | Home ';

	const code = `
	Echo "Thinny Developer By SvelteKit"
	`;
</script>

<!-- <svelte:head>
	{@html github}
</svelte:head> -->

<Highlight language={typescript} {code} />
