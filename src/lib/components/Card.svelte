<script>
	import { dateThai } from '$lib/utils';
	export let title;
	export let description;
	export let cover_image = 'https://flowbite.com/docs/images/blog/image-1.jpg';
	export let published;
	export let author;

	$: slug = '/blogs/' + title.replace(/ /g, '-');
	$: published_date = dateThai(published);
</script>

<div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md m-4 h-1/2 relative">
	<a href={slug}>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img class="rounded-t-lg" src={cover_image} alt="cover image" style="max-height: 304px;" />
	</a>
	<div class="p-5">
		<a href={slug}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
		<a
			href={slug}
			class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			อ่านต่อ
			<svg
				class="ml-2 -mr-1 w-4 h-4"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</a>
		<div class="top-2 right-2 text-xs absolute bg-green-500 p-1 rounded text-white block">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 inline-block"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
			{published_date}
		</div>
		<span class="bottom-4 right-4 text-xs absolute bg-green-500 p-1 rounded text-white block">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 inline-block"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
				<path
					fill-rule="evenodd"
					d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
					clip-rule="evenodd"
				/>
			</svg>
			{author}
		</span>
	</div>
</div>
