<script context="module">
	export const load = async ({ params }) => {
		const { slug } = params;
		return {
			props: {
				slug
			}
		};
	};
</script>

<script>
	import { seo, update } from '$lib/store/seo';
	export let slug;
	$: slug_title = slug.replace(/-/g, ' ');
	$seo.title = slug_title;
</script>

<!-- <svelte:head><title>{'Blog: ' + slug_title}</title></svelte:head> -->
<div class="flex justify-center items-center bg-white m-4">
	{$seo.title}
</div>
