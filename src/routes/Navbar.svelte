<script lang="ts">
	import { browser } from '$app/environment';
	import { TITLE } from '$src/config';
	import { isLoggedIn, theme } from '$src/stores';

	export let title: string | undefined = undefined;
	export let url: string | undefined = undefined;

	function switchTheme() {
		$theme = $theme === 'dark' ? 'light' : 'dark';

		if (browser && document) {
			const html = document.querySelector('html');
			if (html) {
				if ($theme === 'dark' && !html.classList.contains('dark')) {
					html.classList.add('dark');
				} else if ($theme === 'light') {
					html.classList.remove('dark');
				}
			}
		}
	}
</script>

<nav
	class="flex flex-row flex-wrap py-6 px-16 justify-center md:justify-between items-center gap-4"
>
	<span class="flex flex-row gap-2 items-baseline">
		<a href="/" class="text-4xl font-bold hover:underline">{TITLE}</a>
		{#if title}
			<p class="text-3xl font-bold hover:underline">&gt;</p>
			<a href={url} class="text-3xl font-bold hover:underline"> {title} </a>
		{/if}
	</span>

	<div class="flex flex-row gap-6">
		<button
			on:click={switchTheme}
			class="px-2 py-1 text-lg bg-green-400 dark:bg-green-900 font-semibold rounded-lg border-2 border-green-900 dark:border-green-500 hover:scale-95 transition-all shadow-lg"
		>
			{$theme === 'dark' ? 'light' : 'dark'} theme
		</button>

		{#if !$isLoggedIn}
			<a
				href="/login"
				class="px-2 py-1 text-lg bg-blue-400 dark:bg-blue-900 font-semibold rounded-lg border-2 border-blue-900 dark:border-blue-500 hover:scale-95 transition-all shadow-lg"
			>
				login
			</a>
		{/if}
	</div>
</nav>
