<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { SelectProps } from './InputType';
	export let { label, multiple, options }: SelectProps = {} as SelectProps;
	let selected = [];
	const dispatch = createEventDispatcher();
	const onGroupSelection = (e) => {
		if (multiple) {
			dispatch('inputChange', {
				value: selected
			});
		} else {
			dispatch('inputChange', {
				value: e.target.value
			});
		}
	};
</script>

<div class="form-control w-full max-w-xs text-base-content">
	{#if multiple}
		<label class="label">
			<span class="label-text">{label}</span>
		</label>

		<select
			class={`select select-bordered`}
			multiple
			bind:value={selected}
			on:change={onGroupSelection}
		>
			{#each options as option (option)}
				<option>{option}</option>
			{/each}
		</select>
	{:else}
		<label class="label">
			<span class="label-text">{label}</span>
		</label>

		<select class={`select select-bordered`} on:change={onGroupSelection}>
			{#each options as option (option)}
				<option>{option}</option>
			{/each}
		</select>
	{/if}
</div>
