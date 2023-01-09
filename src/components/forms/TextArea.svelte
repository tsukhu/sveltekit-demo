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

<div class="form-control">
	<label class="label">
		<span class="label-text">{label}</span>
	</label>

	<textarea
		class="textarea textarea-bordered h-24 text-base-content"
		{rows}
		{placeholder}
		on:change={onInputChange}
	/>
</div>
