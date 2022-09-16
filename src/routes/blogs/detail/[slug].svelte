<script context="module">
	import { seo, updateSeoTag } from '$lib/store/seo';
	import supabase from '$lib/db';

	export const load = async ({ params }) => {
		const { slug } = params;
		const title = slug.replace(/-/g, ' ');

		let { data: blog, error } = await supabase.from('blogs').select('*').eq('title', title).single();

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
	import { Calendar } from '$lib/components/icons/index';
	import { dateThai } from '$lib/utils';
	import { lazyLoad } from '$lib/core/lazyLoad';
	// import Highlight from 'svelte-highlight';
	// import typescript from 'svelte-highlight/src/languages/typescript';
	// import github from 'svelte-highlight/src/styles/github';
	// import 'svelte-highlight/src/styles/atom-one-dark.css';
	// import Prism from 'prismjs';

	export let blog;
	$: published_date = dateThai(blog.published);
	// $: detail = Prism.highlight(blog.detail, Prism.languages.javascript, 'javascript');
</script>

<svelte:head>
	<!-- {@html github} -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/themes/prism.min.css"
		integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<div class="bg-white p-12">
	<div class="bg-gray-100 object-cover">
		<img use:lazyLoad={blog.cover_image} alt={blog.title} loading="lazy" class="mx-auto object-cover bg-cover" />
	</div>
	<div class="content px-2">
		<h1 class="text-3xl py-2 pt-5 text-left font-bold text-red-600">{$seo.title}</h1>
		<div class="">
			<small class="text-blue-400">
				<Calendar />
				{published_date}
			</small>
			<small class="text-green-400">
				<!-- <Edit /> -->
				{blog.author}
			</small>
		</div>
		<div class="py-4">
			<p class="mb-4">{@html blog.description}</p>
			<!-- <pre>{@html detail}</pre> -->
		</div>
	</div>
</div>
