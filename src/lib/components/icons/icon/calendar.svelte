<script>
	import { appendClass } from '$lib/core/directives/appendClass';

	export let className;
</script>

<svg xmlns="http://www.w3.org/2000/svg" use:appendClass={className} class={$$props.class ?? 'h-4 w-4 inline-block'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
