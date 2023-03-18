<script lang="ts">
	import { page } from '$app/stores';
	import Navbar from '../Navbar.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>
		{data.config.title}
	</title>
</svelte:head>

<Navbar title={data.config.title} url="/{$page.params.course}" />
<div class="dark:bg-neutral-800 dark:text-neutral-100 min-h-screen dark:[color-scheme:dark]">
	<slot />
</div>
