<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	function dateToInputString(date: Date): string {
		let month = '' + (date.getMonth() + 1); 
		let day = '' + date.getDate(); 
		const year = date.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}
</script>

<form
	class="mx-auto flex flex-col items-center gap-2 my-12"
	on:submit|preventDefault={(e) => {
		//@ts-ignore-next-line
		const formData = Object.fromEntries(new FormData(e.target));
		goto(`/${$page.params.course?.toUpperCase()}/stats/${formData.date}`);
	}}
>
	<label for="date" class="text-xl"> See stats for: </label>
	<input
		type="date"
		name="date"
		class="border-2 border-black dark:bg-neutral-900 px-3 py-2 rounded-md shadow-lg"
		value={dateToInputString(new Date())}
	/>
	<button
		type="submit"
		class="px-4 py-2 border-2 border-green-900 dark:border-green-500 bg-green-500 dark:bg-green-900 rounded-md shadow-lg hover:scale-95 transition-all"
	>
		Search
	</button>
</form>
