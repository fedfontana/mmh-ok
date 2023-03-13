<script>
	import { isLoggedIn } from '../stores';
</script>

<nav class="flex flex-row py-4 px-12 font-semibold justify-between items-center">
	<a href="/" class="text-2xl hover:underline place-self-start mr-auto"> mmh...ok? </a>
	{#if !$isLoggedIn}
		<a
			href="/login"
			class="px-3 py-2 text-xl bg-blue-400 rounded-lg border-2 border-blue-900 hover:scale-95 transition-all shadow-lg"
		>
			login
		</a>
	{/if}
</nav>
