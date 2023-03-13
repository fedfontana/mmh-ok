<script lang="ts">
	import '../app.css';
	import { isLoggedIn } from '../stores';
	import type { LayoutServerData } from './$types';
	import Navbar from './Navbar.svelte';

	export let data: LayoutServerData;
	$: {
		console.log("Changin data to:", data.isLoggedIn)
		if (data) {
			$isLoggedIn = data.isLoggedIn;
		}
	}
</script>

<div>
	<Navbar />
	<slot />
</div>
