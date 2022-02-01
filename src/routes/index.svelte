<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<script>
	import { seo } from '$lib/store/seo';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/src/languages/typescript';
	import github from 'svelte-highlight/src/styles/github';

	// update SEO
	$seo = {
		...$seo,
		title: 'Thinny.dev | หน้าแรกบทความ ',
		url: 'www.thinny.dev/',
		image: 'https://npgblog.dev/static/5b3e1215fa148d9f5a3a01d4f1d51c3d/ee604/featureImage.png'
	};

	let code = '// src/App.svelte \n';
	code += 'const website = "thinny.dev" \n';
	code += 'console.log(`${website} Power By SvelteKit`);\n\n';
	code += '// Output\n';
	code += 'thinny.dev Power By Sveltekit\n';
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div class="min-h-screen flex justify-center items-center">
	<Highlight {code} language={typescript} />
</div>
