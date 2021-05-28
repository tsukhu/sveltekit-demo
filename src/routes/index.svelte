<script type="ts">
	import Todo from '$lib/Todo.svelte';
	import type { TodoType } from '$lib/Todo.svelte';

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

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<div>
	<h2>Hello and welcome to my site!</h2>
	<div>
		{status}
		<button on:click={archiveCompleted}>Archive Completed</button>
	</div>
	<form on:submit|preventDefault={addTodo}>
		<input type="text" size="30" placeholder="enter a new todo" bind:value={todoText} />
		<button disabled={!todoText}>Add</button>
	</form>
	<ul>
		{#each todos as todo}
			<Todo
				{todo}
				on:delete={() => deleteTodo(todo.id)}
				on:toggleDone={() => toggleDone(todo.id)}
			/>
		{/each}
	</ul>
</div>
