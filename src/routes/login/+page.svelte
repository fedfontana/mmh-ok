<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { isLoggedIn } from '$src/stores';
	import { goto } from '$app/navigation';
	import Navbar from '../Navbar.svelte';

	let error: string | undefined = undefined;

	const handleLoginSubmit: SubmitFunction = () => {
		return async ({ form, result }) => {
			switch (result.type) {
				case 'success':
					$isLoggedIn = true;
					goto('/');
					break;
				case 'failure':
					form.reset();
					break;
				case 'error':
					error = 'There was an error logging you in';
					break;
			}
		};
	};
</script>

<Navbar />
<form
	method="POST"
	use:enhance={handleLoginSubmit}
	class="flex flex-col gap-8 lg:w-1/4 md:w-1/2 px-12 md:p-0 w-full mx-auto justify-between mt-12"
>
	<h2 class="mx-auto text-3xl font-semibold">Login</h2>

	{#if error !== undefined}
		<p class="text-lg text-red-500">
			{error}
		</p>
	{/if}

	<div class="flex flex-col gap-4 items-center justify-center">
		<div class="flex flex-col gap-[0.1rem] w-full">
			<label class="text-sm text-neutral-700 dark:text-neutral-200 text-opacity-90" for="username"> Username </label>
			<input
				name="username"
				type="text"
				placeholder="Username"
				class="border-2 border-black dark:bg-neutral-900 rounded-md px-3 py-2 shadow-lg"
				value=""
				required
			/>
		</div>

		<div class="flex flex-col gap-[0.1rem] w-full">
			<label class="text-sm text-neutral-700 dark:text-neutral-200 text-opacity-9" for="password"> Password </label>
			<input
				name="password"
				type="password"
				placeholder="Password"
				class="border-2 border-black dark:bg-neutral-900 rounded-md px-3 py-2 shadow-lg"
				value=""
			/>
		</div>
	</div>

	<button
		type="submit"
		class="bg-green-500 dark:bg-green-900 px-4 py-2 border-2 shadow-lg border-green-900 dark:border-green-500 rounded-md max-w-fit self-end"
	>
		Login
	</button>
</form>
