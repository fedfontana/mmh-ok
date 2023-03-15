<script lang="ts">
	import { isLoggedIn } from '../stores';

	export let word: string;
	export let initialCount: number;

	let counter = initialCount;

	async function saveCounter(c: number) {
		const res = await fetch("/api/word", { 
			method: 'POST', 
			body: JSON.stringify({
				word,
				count: c,
			}),
		});

		if (!res.ok) {
			console.error(res.body?.toString());
		} else {
			counter = c;
		}
		return res.ok;
	}
</script>

<div class="flex flex-col items-center gap-2 text-lg">
	<h3 class="font-semibold text-2xl italic">
		"{word}"
	</h3>
	<div class="flex flex-row gap-3 w-fit text-2xl">
		{#if $isLoggedIn}
			<button
				on:click={() => {
					if (counter >= 1) {
						saveCounter(counter - 1);
					}
				}}
				class="bg-red-500 dark:bg-red-900 py-10 px-8 rounded-md shadow-lg border-2 border-red-900 dark:border-red-500 hover:scale-95 transition-all disabled:opacity-40 disabled:transition-none disabled:hover:scale-100"
				disabled={counter < 1}
			>
				-
			</button>
		{/if}
		<span
			class="px-14 py-10 font-mono text-6xl bg-neutral-200 dark:bg-neutral-900 shadow-xl rounded-xl border-2 border-black"
		>
			{counter}
		</span>
		{#if $isLoggedIn}
			<button
				on:click={() => {
					saveCounter(counter + 1);
				}}
				class="bg-green-500 dark:bg-green-900 py-10 px-8 rounded-md shadow-lg border-2 border-green-900 dark:border-green-500 hover:scale-95 transition-all"
			>
				+
			</button>
		{/if}
	</div>
</div>
