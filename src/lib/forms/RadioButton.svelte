<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { RadioProps } from './InputType';
	export let { label, type, group, value, checked }: RadioProps = {} as RadioProps;
	const dispatch = createEventDispatcher();
	const onGroupSelection = (e) => {
		dispatch('inputChange', {
			value: e.target.value
		});
	};
</script>

<div>
	<label class="inline-flex items-center">
		<input
			class="form-radio"
			type="radio"
			name={group}
			{value}
			{checked}
			on:click={onGroupSelection}
		/>
		<span class="ml-2">{label}</span>
	</label>
</div>
