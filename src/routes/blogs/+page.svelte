<script lang="ts">
	import supabase from '$lib/db';
	import { seo } from '$lib/store/seo';
	import type { BLOGS } from '$lib/core/types/blogs';
	import { onMount } from 'svelte';
	import Card from '$lib/components/Card.svelte';
	$seo = {
		...$seo,
		title: 'Thinny.dev | Blogs บทความ การเขียนโปรแกรม, Angular, SvelteKit',
		url: '/blogs',
		image: 'https://npgblog.dev/static/5b3e1215fa148d9f5a3a01d4f1d51c3d/ee604/featureImage.png'
	};
	$: blogs = [];

	onMount(async () => {
		let { data, error, status } = await supabase.from('blogs').select('*');
		console.log(data, error, status);
	});
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
	{#each blogs as blog}
		<!-- <Card {blog?.title} {description} {cover_image} {published} {author} /> -->
	{/each}
</div>
