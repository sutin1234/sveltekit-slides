<script>
	import { seo } from '$lib/store/seo';
	$seo = {
		...$seo,
		title: 'Thinny.dev | เขียน blog บทความ ใหม่',
		url: '/blogs/create',
		type: 'blog'
	};
	let title = 'Blog title';
	let description = 'Blog description';
</script>

<div class="text-left">
	<input type="text" value={title} />
	<textarea>{description}</textarea>
</div>
