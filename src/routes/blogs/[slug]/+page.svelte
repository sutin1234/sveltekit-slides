<script lang="ts">
	import { page } from '$app/stores';
	import { afterNavigate, goto } from '$app/navigation';
	import { Navigation } from '@sveltejs/kit';

	// props --> +page.js
	export let data;

	let previousPage: any;
	afterNavigate((navigaton) => {
		previousPage = navigaton.from.url.pathname;
		console.log({ navigaton, previousPage });
	});

	console.log($page);

	function back() {
		// goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')));
		goto(previousPage);
	}
</script>

<div class="p-2">
	Slug: {data.slug} <br />
	<button on:click={back}>back</button>
</div>
