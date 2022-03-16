<script lang="ts">
	import { loading } from '$lib/store/loading-v2';
</script>

{#if $loading.status === 'LOADING'}
	<div class="backdrop bg-black/40 p-4 w-screen top-0 absolute flex items-center justify-center">
		<div class="text-white text-center bg-gray-500 p-4 rounded-lg">
			{$loading.message}
		</div>
	</div>
{/if}
