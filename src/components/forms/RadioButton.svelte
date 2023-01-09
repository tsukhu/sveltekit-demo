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

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text">{label}</span>
		<input
			type="radio"
			name={group}
			class="form-radio"
			{checked}
			on:click={onGroupSelection}
			{value}
		/>
	</label>
</div>
