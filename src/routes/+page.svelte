<script>
	import { goto } from '$app/navigation';
	import WordCounter from './WordCounter.svelte';
	export let data;
</script>

<div class="flex flex-col gap-12 w-full mt-12">
	<div class="flex md:flex-row flex-col md:gap-10 gap-12 mx-auto">
		<WordCounter endpoint="/api/mmh" word="mmh" initialCount={data['mmh']} />
		<WordCounter endpoint="/api/ok" word="ok" initialCount={data['ok']} />
	</div>
	<WordCounter endpoint="/api/mmh-ok" word="mmh-ok" initialCount={data['mmh-ok']} />

	<form
		class="mx-auto flex flex-col items-center gap-2 mt-24"
		on:submit|preventDefault={(e) => {
			//@ts-ignore-next-line
			const formData = Object.fromEntries(new FormData(e.target));
			goto(`/stats/${formData.date}`);
		}}
	>
		<label for="date" class="text-xl"> See stats for: </label>
		<input type="date" name="date" class="border-2 border-black dark:bg-neutral-900 px-3 py-2 rounded-md shadow-lg" />
		<button
			type="submit"
			class="px-4 py-2 border-2 border-green-900 dark:border-green-500 bg-green-500 dark:bg-green-900 rounded-md shadow-lg hover:scale-95 transition-all"
		>
			Search
		</button>
	</form>
</div>
