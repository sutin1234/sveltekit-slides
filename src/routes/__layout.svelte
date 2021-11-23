<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { browser } from '$app/env';
	import 'virtual:windi.css';
	if (browser) import('virtual:windi-devtools');
</script>

<Header />

<main class=" rounded-lg flex flex-col max-h-full justify-center items-center m-20">
	<slot />
</main>
