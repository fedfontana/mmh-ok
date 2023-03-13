<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { isLoggedIn } from '../../stores';
	import { goto } from '$app/navigation';

	let error: string | undefined = undefined;

	const handleLoginSubmit: SubmitFunction = () => {
		return async ({ form, result }) => {
			switch (result.type) {
				case 'success':
                    $isLoggedIn = true;
					goto("/")
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

<form
	method="POST"
	use:enhance={handleLoginSubmit}
	class="flex flex-col gap-12 w-[28rem] mx-auto"
>
	<h2 class="mx-auto text-3xl font-semibold mb-6">Login</h2>

	{#if error !== undefined}
		<p class="flex flex-col items-center gap-2">
			{error}
		</p>
	{/if}

	<div class="flex flex-col gap-4 items-center justify-center">
		<div class="form-control w-full">
			<label class="" for="username"> Username </label>
			<!-- svelte-ignore a11y-autofocus -->
			<input
				name="username"
				type="text"
				placeholder="Username"
				class="border-2 border-black rounded-md"
				value=""
				required
				autofocus
			/>
		</div>

		<div class="w-full">
			<label class="" for="password"> Password </label>
			<input
				name="password"
				type="password"
				placeholder="Password"
				class="border-2 border-black rounded-md"
				value=""
			/>
		</div>
	</div>

	<div class="w-full mx-auto flex justify-end">
		<button
			type="submit"
			class="bg-green-400 px-4 py-2 border-2 shadow-lg border-green-900 rounded-md max-w-xs"
		>
			Login
		</button>
	</div>
</form>
