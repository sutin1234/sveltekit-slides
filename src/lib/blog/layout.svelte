<script>
	// import 'highlight.js';
	// import 'highlight.js/styles/atom-one-dark.css';
	// import Prism from 'prismjs';

	$: code = `const data = "testig data";`;
	// $: html = Prism.highlight(code, Prism.languages.javascript, 'javascript');s
	const codeChange = ({ target }) => (code = target.value);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/themes/prism.min.css"
		integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<section class="p-4">
	<pre class="bg-gray-100 p-2 rounded-lg">
		<!-- {@html html} -->
	</pre>

	<textarea class="border border-gray-200 p-2" cols="30" rows="10" bind:value={code} on:change={codeChange} />
	<slot />
</section>
