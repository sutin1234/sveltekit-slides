<script>
	import { loading, loadingState } from '$lib/store/loading';
</script>

{#if $loadingState}
	<div class="backdrop bg-gray-200 p-4 w-screen top-0 absolute flex items-center justify-center">
		<div class="text-white text-center">
			{$loading.text}
		</div>
	</div>
{/if}

<style>
	.backdrop {
		height: 100vh;
	}
</style>
