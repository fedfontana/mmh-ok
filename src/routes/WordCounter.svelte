<script lang="ts">
	import { isLoggedIn } from '../stores';

	export let endpoint: string;
	export let word: string;
	export let initialCount: number;

	let counter = initialCount;

	async function saveCounter(c: number) {
		const res = await fetch(`${endpoint}/${c}`, { method: 'POST' });
		if (!res.ok) {
			console.error(res.body);
		} else {
			counter = c;
			console.log(`Logging to ${endpoint}`);
		}
		return res.ok;
	}
</script>

<div class="flex flex-col items-center gap-2 text-lg">
	<h3>
		{word}
	</h3>
	<div class="flex flex-row w-fit bg-neutral-400 text-2xl">
		{#if $isLoggedIn}
			<button
				on:click={() => {
					if(counter >= 1) {
						saveCounter(counter - 1);
					}
				}}
				class="bg-red-400 py-10 px-8 disabled:bg-neutral-600 disabled:opacity-40"
				disabled={counter<1}
			>
				-
			</button>
		{/if}
		<span class="px-14 py-10">
			{counter}
		</span>
		{#if $isLoggedIn}
			<button
				on:click={() => {
					saveCounter(counter + 1);
				}}
				class="bg-green-400 py-10 px-8"
			>
				+
			</button>
		{/if}
	</div>
</div>
