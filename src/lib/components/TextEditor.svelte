<script>
	import { createEventDispatcher } from 'svelte';
	import Editor from 'cl-editor';
	export let html = 'TextEditor';
	export let height = '300px';

	const dispatch = createEventDispatcher();

	function onChange(ev) {
		html = ev.detail;
		dispatch('dataChange', html);
	}
</script>

<Editor {html} {height} on:change={onChange} />
