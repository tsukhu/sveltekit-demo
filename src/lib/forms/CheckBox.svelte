<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { InputType } from './InputType';
	import type { CheckProps } from './InputType';
	export let { label, checked }: CheckProps = {} as CheckProps;
	const dispatch = createEventDispatcher();
	const onCheck = (e) => {
		dispatch('inputChange', {
			label,
			checked: e.target.checked
		});
	};
</script>

<div>
	<label class="inline-flex items-center">
		<input class="form-checkbox" type={InputType.checkbox} {checked} on:click={onCheck} />
		<span class="ml-2">{label}</span>
	</label>
</div>
