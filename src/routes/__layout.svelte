<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { browser } from '$app/env';
	import 'virtual:windi.css';
	if (browser) import('virtual:windi-devtools');
</script>

<Header />

<main class="rounded-lg flex flex-col max-h-full justify-center items-center m-20">
	<slot />
</main>

<style global lang="postcss">
	body,
	html {
		/* font-family: 'Nanum Pen Script', cursive; */
	}

	pre[data-language='typescript'] {
		@apply text-2xl;
	}
	pre[data-language='css'] {
		--hljs-background: linear-gradient(135deg, #2996cf, 80%, white);
		--hljs-foreground: #fff;
		--hljs-radius: 8px;
	}
</style>
