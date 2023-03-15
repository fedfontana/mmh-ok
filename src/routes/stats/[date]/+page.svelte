<script lang="ts">
	import { page } from '$app/stores';
	import { WORDS } from '$src/constants';
	import StatsForm from '$src/routes/StatsForm.svelte';
	import type { PageData } from './$types';
	import DayEntries from './DayEntries.svelte';
	import TimeSeriesPlot from './TimeSeriesPlot.svelte';

	export let data: PageData;

	const then = new Date($page.params.date!);
	const deltaDays = (then.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
	const formatter = new Intl.RelativeTimeFormat();
	const relativeDate = formatter.format(Math.round(deltaDays), 'days');
</script>

<div class="flex flex-col items-center gap-12 mt-12">
	{#if Object.values(data.day_entries).filter((value) => value.length > 0).length > 0}
		<div class="flex flex-row flex-wrap justify-center mx-12 gap-4 md:mx-auto w-fit">
			{#each WORDS as word}
				<DayEntries {word} entries={data.day_entries[word]} />
			{/each}
		</div>
		<TimeSeriesPlot data={data.day_entries} />
	{:else}
		<h3 class="font-semibold text-3xl mt-12">No entries for {relativeDate}</h3>
		<StatsForm />
	{/if}
</div>
