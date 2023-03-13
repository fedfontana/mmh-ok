<script>
	import WordCounter from "./WordCounter.svelte";
    export let data;
    $: console.log(data);
</script>

<div class="flex flex-col gap-12 w-full">
    <div class="flex flex-row gap-10 mx-auto">   
        <WordCounter endpoint="/api/mmh" word="mmh" initial_count={data["mmh"]}/>
        <WordCounter endpoint="/api/ok" word="ok" initial_count={data["ok"]} />
    </div>
    <div>
        <WordCounter endpoint="/api/mmh-ok" word="mmh-ok" initial_count={data["mmh-ok"]}/>
    </div>
</div>