<script>
	import WordCounter from "./WordCounter.svelte";
</script>

<div class="flex flex-col gap-12 w-full">
    <div class="flex flex-row gap-10 mx-auto">   
        <WordCounter endpoint="/api/mmh" word="mmh" />
        <WordCounter endpoint="/api/ok" word="ok" />
    </div>
    <div>
        <WordCounter endpoint="/api/mmh-ok" word="mmh-ok" />
    </div>
</div>