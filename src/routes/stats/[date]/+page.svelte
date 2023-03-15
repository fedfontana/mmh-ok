<script lang="ts">
	import { WORDS } from '../../../constants';
	import type { PageData } from './$types';
	import DayEntries from './DayEntries.svelte';

	export let data: PageData;
</script>

<div class="flex flex-col items-center gap-12 mt-12">
	{#if data.day_entries.mmh.length > 0 || data.day_entries.ok.length > 0 || data.day_entries.mmh_ok.length > 0}
		<div class="flex flex-row flex-wrap justify-center mx-12 gap-4 md:mx-auto w-fit">
			{#each WORDS as word}
				<DayEntries {word} entries={data.day_entries[word]} />
			{/each}
		</div>
		<div>fai finta che questo sia un plot</div>
	{:else}
		<h3 class="font-semibold text-2xl mt-12">No entries</h3>
	{/if}
</div>
