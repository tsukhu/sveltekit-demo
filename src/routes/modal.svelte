<script type="ts">
	import ModalOne from '$lib/ModalOne.svelte';

	let showModal = false;
</script>

<svelte:head>
	<title>Modal</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div class="p-4 m-2 border border-gray-200 rounded shadow">
		<h2 class="font-bold text-center align-middle text-gray-800 m-1">Modal Dialog</h2>
		<button
			on:click={() => (showModal = true)}
			class="m-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-5 py-3 bg-purple-500 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm capitalize"
		>
			show modal
		</button>
		{#if showModal}
			<ModalOne on:close={() => (showModal = false)} />
		{/if}
	</div>
</div>
