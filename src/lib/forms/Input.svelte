<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { InputProps } from './InputType';
	export let { label, type, multiple, placeholder }: InputProps = {} as InputProps;
	const dispatch = createEventDispatcher();
	const onInputChange = (e) => {
		dispatch('inputChange', {
			value: e.target.value
		});
	};
</script>

<label class="block text-sm dark:bg-gray-700 dark:text-gray-100">
	<span class="text-gray-700 dark:text-gray-100">{label}</span>
	<input
		{type}
		{multiple}
		class="form-input mt-1 block w-full text-sm  dark:bg-gray-700 dark:text-gray-100"
		{placeholder}
		on:change={onInputChange}
	/>
</label>
