<!-- <script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script> -->
<script>
	import { seo } from '$lib/store/seo';
	import Card from '$lib/components/Card.svelte';
	$seo = {
		...$seo,
		title: 'Thinny.dev | Blogs บทความ การเขียนโปรแกรม, Angular, SvelteKit',
		url: '/blogs',
		image: 'https://npgblog.dev/static/5b3e1215fa148d9f5a3a01d4f1d51c3d/ee604/featureImage.png'
	};
</script>

<div class="min-h-screen flex justify-center items-center">
	<!-- <Card
		title="Noteworthy technology acquisitions 2021"
		description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"
	/> -->
	<h2>Comimg soon...</h2>
</div>
