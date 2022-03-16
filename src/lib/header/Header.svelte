<script lang="ts">
	import { page } from '$app/stores';
	import logo from './logo.png';
	import Seo from '$lib/components/Seo.svelte';
	import 'virtual:windi.css';
</script>

<Seo />

<header class="flex h-18 justify-center items-center bg-blue-500">
	<div class="corner px-2 mx-2">
		<a href="/">
			<img src={logo} alt="SvelteKit" class="mx-2" />
			<span class="text-xl font-bold text-white">Thinny.dev</span>
			<!-- <span class="@sm:hidden @lg:hidden @xl:hidden 2xl:hidden">slides</span> -->
		</a>
	</div>

	<nav>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg> -->

		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<!-- 			
			<li class:active={$page.url.pathname === '/slides'}>
				<a sveltekit:prefetch href="/slides">Slides</a>
			</li>
			 -->

			<li class:active={$page.url.pathname.indexOf('blogs') !== -1}>
				<a sveltekit:prefetch href="/blogs">Blog</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
		</ul>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg> -->
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		/* width: 3em; */
		height: 3em;
		font-weight: 500;
		/* text-transform: uppercase; */
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
	}

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	} */

	/* path {
		fill: var(--background);
	} */

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		/* text-transform: uppercase; */
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		color: white;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
