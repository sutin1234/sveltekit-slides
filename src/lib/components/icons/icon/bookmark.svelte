<script>
	import { appendClass } from '$lib/core/directives/appendClass';
	export let className;
</script>

<svg xmlns="http://www.w3.org/2000/svg" use:appendClass={className} class={$$props.class ?? 'h-4 w-4 inline-block'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
