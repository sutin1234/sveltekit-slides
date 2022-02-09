<!-- <script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script> -->
<script>
	import { seo } from '$lib/store/seo';

	import profile from '$assets/images/me.jpeg';
	import cover_image from '$assets/images/cover-image.jpeg';

	$seo = {
		...$seo,
		title: 'Thinny.dev | About โปรไฟล์เจ้าของเว็บไซต์ ',
		url: '/about',
		keywords: 'thinny.dev, About Profile, Sutin, thinny, สุทิน อินจิตต์',
		description: 'โปรไฟล์เจ้าของเว็บไซต์, Sutin, thinny',
		image: profile
	};

	const name = 'Sutin Injitt';
	const job = 'Software Engineer';
	const lists = [
		{ title: 'Articles', unit: '45' },
		{ title: 'Followers', unit: '998' },
		{ title: 'Rating', unit: '8.5' }
	];
</script>

<div class="flex justify-center items-center">
	<div class="shadow-lg rounded-2xl w-80 bg-white dark:bg-gray-800 mt-8">
		<img alt="profil" src={cover_image} class="rounded-t-lg h-28 w-full mb-4" />
		<div class="flex flex-col items-center justify-center p-4 -mt-16">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="block relative">
				<img
					alt="profil"
					src={profile}
					class="mx-auto object-cover rounded-full h-32 w-32  border-2 border-white dark:border-gray-800"
				/>
			</a>
			<p class="text-gray-800 dark:text-white text-xl font-medium mt-2">{name}</p>
			<p class="text-gray-400 text-xs mb-4">{job}</p>
			<p class="text-xs p-2 bg-blue-500 text-white px-4 rounded-full">Professional</p>
			<div class="rounded-lg p-2 w-full mt-4">
				<div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
					{#each lists as list}
						<p class="flex flex-col">
							{list.title}
							<span class="text-black dark:text-white font-bold"> {list.unit} </span>
						</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
