<script lang="ts">
	export let data;
</script>

{#each data.blogs as d}
	<h1 class="p-2">
		<a href={'/blogs/' + d.id}>{d.title}</a>
	</h1>
{/each}
