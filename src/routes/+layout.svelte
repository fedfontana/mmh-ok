<script lang="ts">
	import { browser } from '$app/environment';
	import '$src/app.css';
	import { TITLE } from '$src/constants';
	import { isLoggedIn, theme } from '$src/stores';
	import type { LayoutServerData } from './$types';
	import Navbar from './Navbar.svelte';

	export let data: LayoutServerData;

	$: {
		if (data) {
			$isLoggedIn = data.isLoggedIn;
		}
	}

	$: {
		if (browser && document) {
			const html = document.querySelector('html');
			if (html) {
				if ($theme === 'dark' && !html.classList.contains('dark')) {
					html.classList.add('dark');
				} else if ($theme === 'light') {
					html.classList.remove('dark');
				}
			}
		}
	}
</script>

<svelte:head>
	<title>
		{TITLE}
	</title>
</svelte:head>

<div class="dark:bg-neutral-800 dark:text-neutral-100 min-h-screen dark:[color-scheme:dark]">
	<Navbar />
	<slot />
</div>
