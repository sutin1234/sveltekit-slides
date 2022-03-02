<!-- <script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script> -->
<script>
	import { seo } from '$lib/store/seo';
	import Highlight from 'svelte-highlight';
	import { HighlightAuto } from 'svelte-highlight';
	import typescript from 'svelte-highlight/src/languages/typescript';
	// import github from 'svelte-highlight/src/styles/github';
	import 'svelte-highlight/src/styles/atom-one-dark.css';

	// update SEO
	$seo = {
		...$seo,
		title: 'Thinny.dev | หน้าแรกบทความ ',
		url: 'www.thinny.dev/',
		image: 'https://npgblog.dev/static/5b3e1215fa148d9f5a3a01d4f1d51c3d/ee604/featureImage.png'
	};
	let code = '// src/App.svelte\n';
	code += 'const website = "www.thinny.dev" \n';
	code += 'const year = "new Date().getFullYear()" \n';
	code += 'console.log(`${website} Power By SvelteKit @ ${year}`);\n\n';
	code += '// Play on Svelte REPL\n';
	code += 'https://svelte.dev/repl\n\n';
	code += '// Output\n';
	code += 'www.thinny.dev Power By Sveltekit @2022 \n';
</script>

<svelte:head>
	<!-- {@html github} -->
</svelte:head>

<div class="flex justify-center items-center">
	<HighlightAuto {code} />
</div>

<a href="http://projanco.com/Library/AngularJS%20in%20Action.pdf">download pdf</a>
