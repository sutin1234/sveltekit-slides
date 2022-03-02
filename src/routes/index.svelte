<!-- <script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script> -->
<script>
	// @ts-nocheck

	import { seo } from '$lib/store/seo';
	// import Highlight from 'svelte-highlight';
	import { HighlightAuto } from 'svelte-highlight';
	// import typescript from 'svelte-highlight/src/languages/typescript';
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

	const downloadPdf = (fileURL = 'http://projanco.com/Library/AngularJS%20in%20Action.pdf', fileName = 'test.pdf') => {
		if (!window.ActiveXObject) {
			var save = document.createElement('a');
			save.href = fileURL;
			save.target = '_blank';
			// var filename = fileURL.substring(fileURL.lastIndexOf('/') + 1);
			save.download = fileName;
			if (navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search('Chrome') < 0) {
				document.location = save.href;
				// window event not working here
			} else {
				var evt = new MouseEvent('click', {
					view: window,
					bubbles: true,
					cancelable: false
				});
				save.dispatchEvent(evt);
				(window.URL || window.webkitURL).revokeObjectURL(save.href);
			}
		} else if (!!window.ActiveXObject && document.execCommand) {
			var _window = window.open(fileURL, '_blank');
			_window.document.close();
			_window.document.execCommand('SaveAs', true, fileName || fileURL);
			_window.close();
		}
	};
</script>

<svelte:head>
	<!-- {@html github} -->
</svelte:head>

<div class="flex justify-center items-center">
	<HighlightAuto {code} />
</div>
<div class="text-center p-4">
	<button class="*primaryBtn" on:click={downloadPdf} target="_system">download pdf</button>
</div>
