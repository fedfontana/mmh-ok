<script>
	import { goto } from "$app/navigation";
</script>
<form
	class="mx-auto flex flex-col items-center gap-2 mt-12 md:mt-24"
	on:submit|preventDefault={(e) => {
		//@ts-ignore-next-line
		const formData = Object.fromEntries(new FormData(e.target));
		goto(`/stats/${formData.date}`);
	}}
>
	<label for="date" class="text-xl"> See stats for: </label>
	<input
		type="date"
		name="date"
		class="border-2 border-black dark:bg-neutral-900 px-3 py-2 rounded-md shadow-lg"
	/>
	<button
		type="submit"
		class="px-4 py-2 border-2 border-green-900 dark:border-green-500 bg-green-500 dark:bg-green-900 rounded-md shadow-lg hover:scale-95 transition-all"
	>
		Search
	</button>
</form>
