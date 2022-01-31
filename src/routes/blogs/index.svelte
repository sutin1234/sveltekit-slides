<script>
	import { seo } from '$lib/store/seo';
	import Card from '$lib/components/Card.svelte';
	$seo = {
		...$seo,
		title: 'Thinny.dev | บทความ การเขียนโปรแกรม, Angular, SvelteKit',
		url: '/blogs',
		image: 'https://npgblog.dev/static/5b3e1215fa148d9f5a3a01d4f1d51c3d/ee604/featureImage.png'
	};
</script>

<Card title="first card" coverImage="cover image" />
