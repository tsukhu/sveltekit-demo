<script type="ts">
	import Todo from '$lib/Todo.svelte';
</script>

<svelte:head>
	<title>Loan App</title>
</svelte:head>

<div class="flex justify-center align-middle items-center">
	<div class="p-4 m-2 border border-gray-200 dark:border-gray-500 rounded shadow bg-white dark:bg-gray-600">
		<Todo />
	</div>
</div>
