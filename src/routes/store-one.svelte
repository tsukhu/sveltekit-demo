<script type="ts">
	import SimpleStore from '$lib/SimpleStore.svelte';
</script>

<svelte:head>
	<title>Loan App</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div class="p-4 m-2 border border-gray-200 rounded shadow">
		<SimpleStore />
	</div>
</div>
