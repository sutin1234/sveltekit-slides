<script context="module">
	import supabase from '$lib/db';

	export const load = async () => {
		let { data: blogs, error } = await supabase.from('blogs').select('*');
		if (error) {
			throw new Error(error.message);
		}
		return {
			props: { blogs }
		};
	};
</script>

<script>
	import { seo } from '$lib/store/seo';
	import Card from '$lib/components/Card.svelte';
	$seo = {
		...$seo,
		title: 'Thinny.dev | Blogs บทความ การเขียนโปรแกรม, Angular, SvelteKit',
		url: '/blogs',
		image: 'https://npgblog.dev/static/5b3e1215fa148d9f5a3a01d4f1d51c3d/ee604/featureImage.png'
	};
	export let blogs;
</script>

<!-- <div class="flex justify-end">
	<a
		class="rounded bg-blue-600 p-2 text-white cursor-pointer px-3 ss:max-w-xs text-center m-4 md:w-max"
		href="/blogs/create"
	>
		เขียนโพสต์
	</a>
</div> -->

<div class="grid lg:grid-cols-3 md:grid-cols-2">
	{#each blogs as { title, description, cover_image, published, author }}
		<Card {title} {description} {cover_image} {published} {author} />
	{/each}
</div>
