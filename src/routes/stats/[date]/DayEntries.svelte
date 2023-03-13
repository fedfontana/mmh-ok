<script lang="ts">
	export let word: string;
	export let entries: {
		count: number;
		dateTime: Date;
		word: string;
	}[];
</script>

<div class="flex flex-col shadow-xl border-2 border-neutral-500 rounded-lg w-fit px-6 py-3">
	<h3 class="text-2xl font-semibold italic">"{word}"</h3>
	<p class="text-lg">
		Updates that day: {entries.length}
	</p>
	<p class="txt-lg">
		{#if entries.length >= 2}
			<!-- TODO not really true since I'm counting the first and last in that day. I should be counting the last the day before vs the last of the day -->
			<i>"{word}"</i>'s that day: {entries[entries.length - 1].count - entries[0].count}
		{:else}
			Not enough entries
		{/if}
	</p>
</div>
