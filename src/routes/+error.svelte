<script lang="ts">
	import { page } from '$app/stores';
	import Navbar from './Navbar.svelte';
</script>

<Navbar />
<div class="flex mx-auto w-fit items-center mt-12 md:mt-24 flex-col gap-12 md:gap-24 justify-center">
    <div class="flex flex-col mx-auto w-fit items-center gap-4">
        <h3 class="text-4xl font-bold">{$page.status}</h3>
        <h2 class="text-5xl font-bold">{$page.error?.message ?? 'There was an error'}</h2>
    </div>
	<a class="text-2xl hover:underline font-semibold text-blue-500" href="/">return to home</a>
</div>
