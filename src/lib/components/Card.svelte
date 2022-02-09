<script>
	import { dateThai } from '$lib/utils';
	import { Calendar, Edit, ArrowRight } from '$lib/components/icons/index';
	import { lazyLoad } from '$lib/core/lazyLoad';
	import { fade } from 'svelte/transition';
	export let { title, description, cover_image, published, author } = $$props;

	$: slug = '/blogs/detail/' + title.replace(/ /g, '-');
	$: published_date = dateThai(published);
</script>

<div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md m-4 h-1/2 relative ">
	<a href={slug} sveltekit:prefetch>
		<!-- <img
			transition:fade
			use:lazyLoad={cover_image}
			class="rounded-lg object-cover h-48 w-96"
			alt={title}
			loading="lazy"
			use:lazyLoad={cover_image}
		/> -->
		<div class="*bgCover bg-gray-200 h-48" style="background-image: url({cover_image});" />
	</a>
	<div class="p-5">
		<a href={slug}>
			<h5 class="*titleCard">{title}</h5>
		</a>
		<p class="*description">{description}</p>
		<a href={slug} class="*read_more">
			อ่านต่อ
			<ArrowRight />
		</a>
		<div class="*published_date">
			<Calendar />
			{published_date}
		</div>
		<span class="*author">
			<Edit />
			{author}
		</span>
	</div>
</div>
