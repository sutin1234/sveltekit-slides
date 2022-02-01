<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<script>
	import { seo } from '$lib/store/seo';
</script>

<svelte:head>
	<link rel="icon" href={$seo.favicon} />
	<title>{$seo.title}</title>
	<meta name="description" content={$seo.description} />
	<meta name="keywords" content={$seo.keywords} />
	<!-- open graph -->
	<meta name="og:title" content={$seo.title} />
	<meta name="og:description" content={$seo.description} />
	<meta name="og:image" content={$seo.image} />
	<meta name="og:site_name" content={$seo.site_name} />
	<meta name="og:url" content={$seo.url} />
	<meta name="og:type" content={$seo.type} />
</svelte:head>
