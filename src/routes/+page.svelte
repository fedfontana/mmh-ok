<script>
	import { goto } from '$app/navigation';
	import { WORDS } from '../constants';
	import StatsForm from './StatsForm.svelte';
	import WordCounter from './WordCounter.svelte';
	export let data;
</script>

<div class="flex flex-col gap-12 w-full mt-12">
	<div class="flex flex-row md:gap-10 gap-12 mx-auto justify-center max-w-[80%] flex-wrap">
		{#each WORDS as word}
			<WordCounter {word} initialCount={data[word]} />
		{/each}
	</div>

	<StatsForm />
</div>
