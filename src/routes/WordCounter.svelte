<script lang="ts">
	export let endpoint: string;
	export let word: string;
	export let initial_count: number;

	let counter = initial_count;

    async function saveCounter(c: number) {
        const res = await fetch(endpoint, { method: "POST" });
        if(!res.ok) {
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
		<button
			on:click={() => {
				saveCounter(counter-1)
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
				saveCounter(counter+1)
			}}
			class="bg-green-400 py-10 px-8"
		>
			+
		</button>
	</div>
</div>
