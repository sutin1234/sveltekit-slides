<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import { browser } from '$app/env';
	import { navigating } from '$app/stores';
	import { loadingState, updateState } from '$lib/store/loading';
	import Loading from '$lib/components/Loading.svelte';
	import { beforeNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';

	// WindiCSS
	import 'virtual:windi.css';
	if (browser) import('virtual:windi-devtools');
	// $: $loadingState = !!$navigating;
	beforeNavigate((e) => {
		console.log('onNavigate', e);
		updateState(true);
		setTimeout(() => updateState(false), 600);
	});
</script>

<Header />

<main class="rounded-lg mb-8">
	<slot />
</main>

<Loading />

<!-- <Footer /> -->
<style global lang="postcss">
	body,
	html {
		/* font-family: 'Nanum Pen Script', cursive; */
		font-family: Prompt, sans-serif;
	}
	pre code.hljs {
		border-radius: 10px;
	}

	pre[data-language='typescript'] {
		@apply text-2xl;
		border-radius: 10px;
	}
	pre[data-language='css'] {
		--hljs-background: linear-gradient(135deg, #2996cf, 80%, white);
		--hljs-foreground: #fff;
		--hljs-radius: 8px;
	}
</style>
