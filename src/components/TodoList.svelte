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

<li in:fade class="flex justify-between items-center w-full">
	<label>
		<input
			type="checkbox"
			role="checkbox"
			checked={todo.done}
			aria-checked={todo.done}
			on:change={() => dispatchEvent('toggleDone')}
			class="checkbox checkbox-success"
		/>
		<span
			class={`${
				todo.done ? ' line-through italic' : ''
			} text-base-content p-2 text-left flex-1 text-sm`}>{todo.text}</span
		>
	</label>
	<div class="tooltip" data-tip="Delete Todo">
		<button
			on:click={() => dispatchEvent('delete')}
			aria-label="Delete Todo"
			class="btn btn-square btn-error"
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
	</div>
</li>
