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

<div class="form-control w-full max-w-xs text-base-content">
	<label class="label">
		<span class="label-text">{label}</span>
	</label>
	<input
		{type}
		multiple={multiple ? true : false}
		{placeholder}
		class="input input-bordered w-full max-w-xs"
		on:change={onInputChange}
	/>
</div>
