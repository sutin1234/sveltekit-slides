<script lang="ts">
	export let title: string;
	export let coverImage: string;
	$: {
		console.log($$props);
	}
</script>

<div>
	{title}
	{coverImage}
</div>
