<script context="module" lang="ts">
	export type TodoType = {
		done: boolean;
		text: string;
		id: number;
	};
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	const dispatchEvent = createEventDispatcher();
	export let todo: TodoType;
</script>

<li in:fade class="flex justify-between align-middle items-center mt-1">
	<label>
		<input
			type="checkbox"
			role="checkbox"
			checked={todo.done}
			aria-checked={todo.done}
			on:change={() => dispatchEvent('toggleDone')}
			class="rounded text-indigo-500 p-2 m-2"
		/>
		<span
			class={`${
				todo.done ? 'text-gray-500 dark:text-gray-200 line-through italic' : 'text-gray-800'
			} p-2 text-left flex-1 text-sm`}>{todo.text}</span
		>
	</label>
	<button
		on:click={() => dispatchEvent('delete')}
		aria-label="Delete Todo"
		class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
				clip-rule="evenodd"
			/>
		</svg></button
	>
</li>
