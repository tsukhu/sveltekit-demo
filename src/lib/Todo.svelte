<script lang="ts">
	import TodoList from '$lib/TodoList.svelte';
	import type { TodoType } from '$lib/TodoList.svelte';

	let lastId = 0;
	const createTodo = (text, done = false): TodoType => ({ id: ++lastId, text, done });

	let todoText = '';
	let todos: TodoType[] = [createTodo('learn SvelteKit', true)];

	$: upcompletedCount = todos.filter((t) => !t.done).length;
	$: status = `${upcompletedCount} of ${todos.length} remaining`;

	function addTodo() {
		todos = todos.concat(createTodo(todoText));
		todoText = '';
	}

	const archiveCompleted = () => (todos = todos.filter((t) => !t.done));

	const deleteTodo = (todoId: number) => (todos = todos.filter((t) => t.id !== todoId));

	function toggleDone(id: number) {
		todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
	}
</script>

<h2 class="font-bold text-center align-middle text-gray-800 dark:text-gray-100">To Do App</h2>
<div class="flex-1 px-2 py-3 text-xs text-green-700 dark:text-green-200 flex justify-between">
	<div class="text-gray-700 dark:text-gray-50 uppercase font-semibold mx-1">user id</div>
	{'ADD USER ID'}
</div>
<div class="italic text-xs flex justify-start align-middle items-center">
	<div class="flex-1 px-2 py-3 text-gray-500 dark:text-gray-100">{status}</div>

	<button
		on:click={archiveCompleted}
		aria-label="Archive Completed Todos"
		type="button"
		class="inline-flex  items-center justify-center px-5 py-3 border border-indigo-200 dark:border-indigo-200 text-base font-medium rounded-md text-indigo-600 bg-white dark:bg-transparent dark:text-indigo-200 hover:bg-indigo-50 dark:hover:bg-gray-700"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
			<path
				fill-rule="evenodd"
				d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/>
		</svg></button
	>
</div>
<form
	on:submit|preventDefault={addTodo}
	class="mt-1 flex justify-between align-middle items-center"
>
	<input
		type="text"
		placeholder="enter a new todo"
		bind:value={todoText}
		class="px-2 py-3 w-full md:w-80 placeholder-blue-600 dark:placeholder-blue-200 text-blue-800 dark:text-blue-200 relative bg-white dark:bg-gray-700 rounded text-sm border border-indigo-200 shadow outline-none  focus:outline-none focus:ring mx-2"
	/>
	<button
		disabled={!todoText}
		aria-label="Enter a new Todo"
		class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
				clip-rule="evenodd"
			/>
		</svg></button
	>
</form>
<ul class="flex flex-col justify-between align-middle items-left">
	{#each todos as todo (todo.id)}
		<TodoList
			{todo}
			on:delete={() => deleteTodo(todo.id)}
			on:toggleDone={() => toggleDone(todo.id)}
		/>
	{/each}
</ul>
