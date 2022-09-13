<script lang="ts">
	import { DynamicIcon } from '$lib/components/icons';
	import { IMENULIST } from '$lib/core/interfaces/menus';
	import supabase from '$lib/db';
	import { menus } from '$lib/store/menus';
	import { onMount } from 'svelte';
	export let menuLists: IMENULIST[];

	onMount(async () => {
		let { data } = await supabase.from('menus').select('*');
		console.log('data menus ', data);
		if (data) {
			menus.update((m: IMENULIST[]) => (m = data));
		}
	});
	const setActive = (evt: any, index: number, id: string) => {
		const foundMenu = $menus?.find((m) => m?.id == id);
		if (foundMenu) {
			foundMenu.actived = true;
			$menus[index] = foundMenu;
			// updateMenu(id, true);
		}
	};
	const updateMenu = async (id: string, actived: boolean) => {
		const { data, error } = await supabase.from('menus').update({ actived }).eq('id', id);
		console.log(data, error);
	};
</script>

<ul>
	{#each menuLists as menu, index}
		<li class="hover:text-blue-800 py-2 rounded">
			<a href={menu?.link} class="ss:p-0 ss:text-center p-2 cursor-pointer" class:activated={menu?.actived} class:text-blue-600={menu?.actived}>
				{#if menu?.icon}
					<DynamicIcon name={menu?.icon} className="h-8 w-8" class="ss:w-10 ss:h-10 ss:inline-block" />
				{/if}
				<span class="ss:hidden lg:inline-block">{menu?.label}</span>
			</a>
		</li>
	{/each}
</ul>

<!-- <div class="py-4">
	<a href="/blogs/create" class="p-0 m-1">
		<DynamicIcon name="edit" className="h-8 w-8" class="ss:w-8 ss:h-8 ss:inline-block" />
		<span class="ss:hidden lg:inline-block">Create Post</span>
	</a>
</div> -->
<style global>
	ul {
		padding: 0;
		margin: 0;
	}
	ul > li {
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
