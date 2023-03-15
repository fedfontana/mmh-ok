<script lang="ts">
	import '$src/app.css';
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

<div class="dark:bg-neutral-800 dark:text-neutral-100 min-h-screen dark:[color-scheme:dark]">
	<Navbar />
	<slot />
</div>
