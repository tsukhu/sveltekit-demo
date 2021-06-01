<script type="ts">
	import ModalOne from '$lib/ModalOne.svelte';

	let showModal = false;
</script>

<svelte:head>
	<title>Modal</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div class="p-4 m-2 border border-gray-200 rounded shadow">
		<h2 class="font-bold text-center align-middle text-gray-800">Modal Dialog</h2>
		<button on:click={() => (showModal = true)}
			
			class="m-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-25 disabled:cursor-default"
	
			> show modal </button>
		{#if showModal}
			<ModalOne on:close={() => (showModal = false)} />
		{/if}
	</div>
</div>
