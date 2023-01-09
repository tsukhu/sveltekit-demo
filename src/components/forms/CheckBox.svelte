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

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text">{label}</span>
		<input
			type={InputType.checkbox}
			checked={checked ? true : false}
			class="checkbox checkbox-primary"
		/>
	</label>
</div>
