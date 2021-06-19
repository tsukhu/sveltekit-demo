<script type="ts">
	import SimpleStore from '$lib/SimpleStore.svelte';
</script>

<svelte:head>
	<title>Counter App</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div
		class="p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600"
	>
		<SimpleStore />
	</div>
</div>
