<script>
	import { CONFIG } from "$src/config";

</script>
<div>
    {#each Object.entries(CONFIG) as [courseName, courseConfig]}
        <a class="text-blue-500 hover:underline text-lg" href="{courseName}">{courseName} - {courseConfig.title}</a>
    {/each}
</div>