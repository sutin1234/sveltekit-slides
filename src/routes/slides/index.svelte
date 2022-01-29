<script>
	import { slide, fly } from 'svelte/transition';
	import SlideOne from '$lib/slides/SlideOne.svelte';
	import SlideTwo from '$lib/slides/SlideTwo.svelte';
	import SlideThree from '$lib/slides/SlideThree.svelte';
	import SlideFour from '$lib/slides/SlideFour.svelte';
	import SlideFive from '$lib/slides/SlideFive.svelte';
	import SlideSix from '$lib/slides/SlideSix.svelte';
	import arrow_next from '$assets/images/arrow-next.svg';
	import arrow_prev from '$assets/images/arrow-prev.svg';
	import { seo } from '$lib/store/seo';

	let currentComponent = 0;
	let slides = [SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix];
	const prev = () => currentComponent--;
	const next = () => currentComponent++;
	$: disabledPrev = currentComponent <= 0;
	$: disabledNext = currentComponent >= slides.length - 1;

	$seo.title = 'Thinny.dev | Slides';
</script>

<div>
	<div in:fly={{ delay: 300, duration: 300 }} out:slide={{ duration: 300 }}>
		<svelte:component this={slides[currentComponent]} />
	</div>
</div>

<div class="navigation absolute bottom-2 right-2">
	Slides {currentComponent + 1}/{slides.length}
	<button class="m-1 border p-1 px-2" on:click={prev} disabled={disabledPrev}>
		<img src={arrow_prev} alt="" class="h-4" />
	</button>
	<button class="m-1 border p-1 px-2" on:click={next} disabled={disabledNext}>
		<img src={arrow_next} alt="" class="h-4" />
	</button>
</div>
