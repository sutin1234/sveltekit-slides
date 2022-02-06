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
	import { Calendar, Edit } from '$lib/components/icons/index';
	import { dateThai } from '$lib/utils';
	export let blog;
	$: published_date = dateThai(blog.published);
</script>

<!-- <svelte:head><title>{'Blog: ' + slug_title}</title></svelte:head> -->
<div class="bg-white m-4 lg:p-12 pt-5 flex align-center flex-col">
	<img
		src={blog.cover_image}
		alt={blog.title}
		loading="lazy"
		class="rounded-lg border shadow-md object-cover"
	/>
	<h1 class="text-3xl py-2 pt-5">{$seo.title}</h1>
	<div>
		<small class="text-gray-400">
			<Calendar />
			{published_date}
		</small>
		<small class="">
			<Edit />
			{blog.author}
		</small>
	</div>
	<p class="py-4">{blog.description}</p>
</div>
