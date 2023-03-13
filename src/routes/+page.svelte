<script>
	import WordCounter from "./WordCounter.svelte";
    export let data;
</script>

<div class="flex flex-col gap-12 w-full">
    <div class="flex flex-row gap-10 mx-auto">   
        <WordCounter endpoint="/api/mmh" word="mmh" initialCount={data["mmh"]}/>
        <WordCounter endpoint="/api/ok" word="ok" initialCount={data["ok"]} />
    </div>
    <div>
        <WordCounter endpoint="/api/mmh-ok" word="mmh-ok" initialCount={data["mmh-ok"]}/>
    </div>
</div>