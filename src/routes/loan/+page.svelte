<script lang="ts">
	import { goto } from '$app/navigation';
	import SEO from '$lib/SEO.svelte';
	import Loan from '$lib/Loan.svelte';
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

<div class="flex justify-center align-middle items-center">
	<div class="p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600">
		{#if error}
			<p class="p-2 text-sm text-gray-700 text-center">Please login to view this app</p>
		{:else}
			<Loan />
		{/if}
	</div>
</div>
