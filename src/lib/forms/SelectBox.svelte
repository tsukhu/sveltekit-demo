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

{#if multiple}
	<label class="block text-sm">
		<span class="text-gray-700 dark:text-gray-100 font-semibold">{label}</span>

		<select
			class={`form-multiselect block w-full mt-1 dark:bg-gray-700 dark:text-gray-100 text-sm`}
			multiple
			bind:value={selected}
			on:change={onGroupSelection}
		>
			{#each options as option (option)}
				<option>{option}</option>
			{/each}
		</select>
	</label>
{:else}
	<label class="block">
		<span class="text-gray-700">{label}</span>

		<select class={`form-select block w-full mt-1`} on:change={onGroupSelection}>
			{#each options as option (option)}
				<option>{option}</option>
			{/each}
		</select>
	</label>
{/if}
