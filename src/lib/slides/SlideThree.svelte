<script>
	let scriptText = `
        <div x-data={ open: false }>
            ...
        </div>
    `;
	let alpine_list = [
		{
			title: 'x-data',
			description: 'Declare a new Alpine component and its data for a block of HTML'
		},
		{
			title: 'example',
			description: `
            <div x-data={ open: false }>
                ...
            </div>
            `
		},
		{
			title: 'x-init',
			description: 'Run code when an element is initialized by Alpine'
		},
		{
			title: 'example',
			description: ` 
            <div x-init="load()">
                ...
            </div>
            `
		},
		{
			title: 'x-bind',
			description: 'Dynamically set HTML attributes on an elemen'
		},
		{
			title: 'example',
			description: `
            <input type="text" x-bind:value="myValue" />
            `
		},
		{
			title: 'x-on',
			description: 'Listen for browser events on an element'
		},
		{
			title: 'example',
			description: `
            <input type="text" x-on:click="myFn" />
            `
		},
		{
			title: 'x-text',
			description: 'Set the text content of an element'
		},
		{
			title: 'x-for',
			description: 'Repeat a block of HTML based on a data set'
		}
	];
</script>

<div class="flex flex-wrap text-center justify-center">
	{#each alpine_list as list}
		<div class="w-1/3 text-left m-4 border p-2 rounded-lg">
			<div class="text-2xl text-green-500">{list.title}</div>
			<p class="my-2">{list.description}</p>
		</div>
	{/each}
</div>
