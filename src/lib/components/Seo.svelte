<script>
	import { seo } from '$lib/store/seo';
</script>

<svelte:head>
	<link rel="icon" href={$seo.favicon} />
	<title>{$seo.title}</title>
	<meta name="description" content={$seo.description} />
</svelte:head>
