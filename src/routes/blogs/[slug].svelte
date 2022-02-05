<script context="module">
	import { seo, update } from '$lib/store/seo';
	import supabase from '$lib/db';

	export const load = async ({ url, params }) => {
		const { slug } = params;
		const title = slug.replace(/-/g, ' ');
		let { data: blog, error } = await supabase
			.from('blogs')
			.select('*')
			.eq('title', title)
			.single();

		update({
			title,
			description: blog.description,
			image: blog.cover_image,
			keywords: blog.title,
			url: `/blogs/${slug}`
		});
		return {
			props: {
				blog
			}
		};
	};
</script>

<script>
	export let blog;
</script>

<!-- <svelte:head><title>{'Blog: ' + slug_title}</title></svelte:head> -->
<div class="bg-white m-4">
	<h1 class="text-3xl">{$seo.title}</h1>
	<p class="p-2">{JSON.stringify(blog)}</p>
</div>
