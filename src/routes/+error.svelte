<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	import PageNotFound from '$lib/components/PageNotFound.svelte';
	import ErrorPage from '$lib/components/ErrorPage.svelte';
	import { onMount } from 'svelte';
	export let status;
	export let error;
	onMount(async () => {
		console.log(status, error);
	});
</script>

<div class="min-h-screen">
	{#if status == 404}
		<PageNotFound {error} />
	{:else}
		<ErrorPage {status} {error} />
	{/if}
</div>
