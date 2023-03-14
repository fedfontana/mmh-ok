<script>
	import { isLoggedIn, theme } from '../stores';

	function switchTheme() {
		$theme = $theme === "dark" ? "light" : "dark";
		if(document) {
			const html = document.querySelector('html');
			if (html) {
				if ($theme === 'dark' && !html.classList.contains("dark")) {
					html.classList.add("dark");
				} else if ($theme === "dark") {
					html.classList.remove("dark");
				}
			}
		}
	}
</script>

<nav class="flex flex-row py-6 px-16 justify-between items-center">
	<a href="/" class="text-3xl font-bold hover:underline place-self-start mr-auto"> mmh...ok? </a>
	{#if !$isLoggedIn}
		<a
			href="/login"
			class="px-3 py-2 text-xl bg-blue-400 dark:bg-blue-900 font-semibold rounded-lg border-2 border-blue-900 dark:border-blue-500 hover:scale-95 transition-all shadow-lg"
		>
			login
		</a>
	{/if}

	<button on:click={switchTheme}>
		Set {  $theme === "dark" ? "light" : "dark" } theme
	</button>
</nav>
