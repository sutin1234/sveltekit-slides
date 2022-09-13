<script lang="ts">
	import { menus } from '$lib/store/menus';
	import { onMount } from 'svelte';
	import SideNavMenu from './SideNavMenu.svelte';

	onMount(async () => {
		console.log('SideBar >> ', $menus);
	});
</script>

<div class="p-8 min-w-max mr-2 h-screen">
	<div class="nav-menu">
		<SideNavMenu menuLists={$menus} />
	</div>
</div>
