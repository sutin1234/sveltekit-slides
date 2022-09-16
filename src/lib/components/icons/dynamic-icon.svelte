<script>
	import { onMount } from 'svelte';

	export let name;
	let props = null;
	let component = null;
	onMount(async () => {
		if (name != undefined) {
			component = (await import(`./icon/${name}.svelte`)).default;
			props = { ...$$props };
		}
	});
</script>

{#if ![undefined, null].includes(component)}
	<svelte:component this={component} {...props} />
{/if}
