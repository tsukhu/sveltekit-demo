<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { TextAreaProps } from './InputType';
	export let { label, rows, placeholder }: TextAreaProps = {} as TextAreaProps;
	const dispatch = createEventDispatcher();

	const onInputChange = (e) => {
		dispatch('inputChange', {
			value: e.target.value
		});
	};
</script>

<label class="block">
	<span class="text-gray-700">{label}</span>
	<textarea
		class="form-textarea mt-1 block w-full h-24"
		{rows}
		{placeholder}
		on:change={onInputChange}
	/>
</label>
