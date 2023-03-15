<script lang="ts">
	import '$src/app.css';
	import { TITLE } from '$src/constants';
	import { isLoggedIn } from '$src/stores';
	import type { LayoutServerData } from './$types';
	import Navbar from './Navbar.svelte';

	export let data: LayoutServerData;

	$: {
		if (data) {
			$isLoggedIn = data.isLoggedIn;
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
