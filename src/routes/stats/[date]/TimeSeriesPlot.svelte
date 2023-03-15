<script lang="ts">
	//@ts-ignore-next-line
	import Plotly from 'plotly.js-dist';
	import { onMount } from 'svelte';

	export let data: {
		[k: string]: {
			count: number;
			dateTime: Date;
			word: string;
		}[];
	};

	const plotData = Object.entries(data).map(([word, entries]) => {
		const x = entries.map((e) => e.dateTime);
		const y = entries.map((e) => e.count);
		return {
			x,
			y,
			mode: 'lines',
			fill: 'tozeroy',
			name: word
		};
	});

	let plotDiv: HTMLDivElement;

	onMount(async () => {
		await Plotly.newPlot(
			plotDiv,
			plotData,
			{
				title: 'Bullshit over time',
				yaxis: {
					dtick: 1,
				}
			},
			{
				displayModeBar: false,
				responsive: true
			}
		);
	});
</script>

<div class="mx-auto max-w-[95vw] md:max-w-[60vw]" bind:this={plotDiv} />
