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

<li transition:fade>
	<input type="checkbox" checked={todo.done} on:change={() => dispatchEvent('toggleDone')} />
	<span class={`done-${todo.done}`}>{todo.text}</span>
	<button on:click={() => dispatchEvent('delete')}>Delete</button>
</li>

<style>
	.done-true {
		color: gray;
		text-decoration: line-through;
	}
	li {
		margin-top: 5px;
	}
</style>
