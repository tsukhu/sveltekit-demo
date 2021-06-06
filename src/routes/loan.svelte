<script type="ts">
	import { goto } from '$app/navigation';

	import Loan from '$lib/Loan.svelte';
	import authStore from '../stores/authStore';
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

<svelte:head>
	<title>Loan App</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div class="p-4 m-2 border border-gray-200 rounded shadow">
		{#if error}
			<p class="p-2 text-sm text-gray-700 text-center">Please login to view this app</p>
		{:else}
			<Loan />
		{/if}
	</div>
</div>
