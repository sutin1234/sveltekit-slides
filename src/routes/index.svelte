<script context="module">
	// import { browser, dev } from '$app/env';
	// export const hydrate = dev;
	// export const router = browser;
	// export const prerender = true;
	import profile from '$assets/images/me.jpeg';

	export const load = async ({ fetch }) => {
		const data = await fetch(profile);
		return {
			props: {
				blobData: (data && (await data.blob())) || null
			}
		};
	};
</script>

<script>
	// @ts-nocheck

	export let blobData;

	import { seo } from '$lib/store/seo';
	// import Highlight from 'svelte-highlight';
	import { HighlightAuto } from 'svelte-highlight';
	// import typescript from 'svelte-highlight/src/languages/typescript';
	// import github from 'svelte-highlight/src/styles/github';
	import 'svelte-highlight/src/styles/atom-one-dark.css';
	import { onMount } from 'svelte';

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

	onMount(async () => {
		console.log(blobData);
	});

	const downloadPdf = (evt, fileURL = 'http://projanco.com/Library/AngularJS%20in%20Action.pdf', fileName = 'test.pdf') => {
		const userAgent = navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/);
		console.log('userAgent ', userAgent);
		console.log('includes safari', userAgent.includes('safari'));

		if (!window.ActiveXObject) {
			console.log('not ActiveXObject');
			var save = document.createElement('a');
			save.href = fileURL;
			save.target = '_blank';
			// var filename = fileURL.substring(fileURL.lastIndexOf('/') + 1);
			save.download = fileName;
			if (userAgent.includes('safari')) {
				document.location = save.href;
				console.log('safari ok', save);
				// window event not working here
			} else {
				console.log('not safari', save);
				(window.URL || window.webkitURL).revokeObjectURL(save.href);
			}
		} else if (!!window.ActiveXObject && document.execCommand) {
			var _window = window.open(fileURL, '_blank');
			_window.document.close();
			_window.document.execCommand('SaveAs', true, fileName || fileURL);
			_window.close();
		}
	};
	const downloadPdfWithBlob = async (evt, fileURL = '/api/images/me.jpeg', fileName = 'test_blob.pdf') => {
		const userAgent = navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/);
		console.log('userAgent ', userAgent);
		console.log('includes safari', userAgent.includes('safari'));

		console.log('blobData', blobData);

		if (!window.ActiveXObject) {
			var save = document.createElement('a');
			save.href = URL.createObjectURL(blobData);
			save.target = '_blank';
			save.download = fileName;
			if (userAgent.includes('safari')) {
				document.location = save.href;
				console.log('safari ok', save);
			} else {
				console.log('not safari', save);
				(window.URL || window.webkitURL).revokeObjectURL(save.href);
			}
		}

		console.log('navigate success');
	};
	const b64toBlob = (content, contentType) => {
		contentType = contentType || '';
		const sliceSize = 512;
		// method which converts base64 to binary
		const byteCharacters = window.atob(content);

		const byteArrays = [];
		for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			const slice = byteCharacters.slice(offset, offset + sliceSize);
			const byteNumbers = new Array(slice.length);
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}
			const byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}
		const blob = new Blob(byteArrays, {
			type: contentType
		}); // statement which creates the blob
		return blob;
	};

	const dwPDF = (evt, fileURL = 'http://projanco.com/Library/AngularJS%20in%20Action.pdf', fileName = 'test_blob.pdf') => {
		console.log(evt, fileURL, fileName);
		window.open(fileURL);
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
<div>
	<button class="*primaryBtn" on:click|stopPropagation={dwPDF}>download pdf 3</button>
</div>
<div>
	<a class="*primaryBtn" href="https://demo.vl.fyi/PHP/DownloadFile/PHP_DOWNLOAD_FILE_FROM_SERVER.ZIP"> Download File zip </a>
</div>
<div>
	<button class="*primaryBtn" on:click={downloadPdfWithBlob}>downloadPdfWithBlob</button>
</div>
