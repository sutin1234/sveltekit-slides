<script context="module">
	import { seo, updateSeoTag } from '$lib/store/seo';
	import supabase from '$lib/db';

	export const load = async ({ url, params }) => {
		const { slug } = params;
		const title = slug.replace(/-/g, ' ');

		let { data: blog, error } = await supabase
			.from('blogs')
			.select('*')
			.eq('title', title)
			.single();

		if (error) {
			throw new Error(error.message);
		}

		updateSeoTag({
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
	import { lazyLoad } from '$lib/core/lazyLoad';
	export let blog;
	$: published_date = dateThai(blog.published);
</script>

<div class="bg-white lg:p-12 max-w-xl m-0 mx-auto">
	<div class="*bgCover h-96 bg-gray-200" style="background-image: url({blog.cover_image});">
		<!-- <img
			use:lazyLoad={blog.cover_image}
			alt={blog.title}
			loading="lazy"
			class="mx-auto object-fill rounded-lg"
		/> -->
	</div>
	<div class="content lg:px-20 px-2">
		<h1 class="text-3xl py-2 pt-5 text-left font-bold">{$seo.title}</h1>
		<div class="">
			<small class="text-gray-400">
				<Calendar />
				{published_date}
			</small>
			<small class="text-gray-400">
				<Edit />
				{blog.author}
			</small>
		</div>
		<p class="py-4">{blog.description}</p>
	</div>
</div>
