<script>
	import { appendClass } from '$lib/core/directives/appendClass';

	export let className;
</script>

<svg xmlns="http://www.w3.org/2000/svg" use:appendClass={className} class={$$props.class ?? 'h-4 w-4 inline-block'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
