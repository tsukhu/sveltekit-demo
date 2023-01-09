<script lang="ts">
	import { goto } from '$app/navigation';
	import SEO from '$components/SEO.svelte';
	import Loan from '$components/Loan.svelte';
	import authStore from '$stores/authStore';
	let error = false;

	authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
		if (!isLoggedIn && firebaseControlled) {
			error = true;
			setTimeout(async () => {
				await goto('/');
			}, 1500);
		}
	});
</script>

<SEO title={'Loan App'} description={'Load Demo App'} />

<div class="flex justify-center align-middle items-center ">
	<div class="rounded p-14 px-24 gap-4 shadow-md bg-base-300">
		{#if error}
			<p class="p-2 text-sm text-base-content text-center">Please login to view this app</p>
		{:else}
			<Loan />
		{/if}
	</div>
</div>
