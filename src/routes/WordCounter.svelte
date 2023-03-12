<script lang="ts">
	export let endpoint: string;
	export let word: string;

	let counter = 0;

    async function saveCounter() {
        console.log(`Logging to ${endpoint}`);
    }
</script>

<div class="flex flex-col items-center gap-2 text-lg">
	<h3>
		{word}
	</h3>
	<div class="flex flex-row w-fit bg-neutral-400 text-2xl">
		<button
			on:click={() => {
				counter--;
                saveCounter();
			}}
			class="bg-red-400 py-10 px-8"
		>
			-
		</button>
		<span class="px-14 py-10">
			{counter}
		</span>
		<button
			on:click={() => {
				counter++;
                saveCounter();
			}}
			class="bg-green-400 py-10 px-8"
		>
			+
		</button>
	</div>
</div>
