<script lang="ts">
	import type { PageData, PageServerData } from './$types';
	import StatsForm from './StatsForm.svelte';
	import WordCounter from './WordCounter.svelte';

	export let data: PageServerData;
</script>

<div class="flex flex-col gap-12 w-full mt-12">
	<div class="flex flex-row md:gap-10 gap-12 mx-auto justify-center max-w-[80%] flex-wrap">
		{#each Object.entries(data.wordCounts) as [word, count]}
			<WordCounter {word} initialCount={count} />
		{/each}
	</div>

	<StatsForm />
</div>
