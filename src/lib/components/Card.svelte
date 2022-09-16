<script>
	import { dateThai } from '$lib/utils';
	import { Calendar, Edit, ArrowRight } from '$lib/components/icons/index';
	// import { lazyLoad } from '$lib/core/lazyLoad';
	export let { title, description = null, cover_image, published, author } = $$props;

	$: slug = '/blogs/detail/' + title.replace(/ /g, '-');
	$: published_date = dateThai(published);
</script>

<div class="bg-white rounded-lg relative m-4">
	<a href={slug} sveltekit:prefetch>
		<!-- <img
			use:lazyLoad={cover_image}
			class="rounded-lg object-cover h-48 w-96"
			alt={title}
			loading="lazy"
			use:lazyLoad={cover_image}
		/> -->
		<div class="*bgCover bg-gray-200 h-32 rounded-lg" style="background-image: url({cover_image});" />
	</a>
	<div class="p-4">
		<a href={slug}>
			<h5 class="*titleCard">{title}</h5>
		</a>
		<!-- <p class="*description">{description}</p> -->
		<a href={slug} class="*read_more">
			อ่านต่อ
			<ArrowRight />
		</a>
		<div class="*published_date">
			<Calendar />
			<!-- {published_date} -->
		</div>
		<!-- <span class="*author">
			<Edit className="h-4 w-4 inline-block" />
			{author}
		</span> -->
	</div>
</div>
