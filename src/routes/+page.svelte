<script lang="ts">
	import { CONFIG } from '$src/config';
	import Navbar from './Navbar.svelte';
</script>

<Navbar />
<div class="flex flex-col gap-6 min-w-fit md:w-1/12 mt-8 ml-12 md:mt-24 md:ml-36">
	<h2 class="text-4xl font-bold">Courses</h2>
	<ul class="flex flex-col gap-3">
		{#each Object.entries(CONFIG) as [courseName, courseConfig]}
			<li class="list-disc list-inside">
				<a class="text-blue-500 hover:underline text-xl" href={courseName}>
					{courseName} - {courseConfig.title}
				</a>
			</li>
		{/each}
	</ul>
</div>
