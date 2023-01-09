<script lang="ts">
	import type { FormButtonProps } from './InputType';
	import { ButtonType } from './InputType';

	export let props: FormButtonProps;
</script>

<button
	type={props.type}
	on:click={props.clickHandler}
	class={`btn 
       ${
					props.type === ButtonType.submit
						? 'btn-primary'
						: props.type === ButtonType.reset
						? 'btn-secondary'
						: 'btn-accent'
				}`}
>
	{props.label}
</button>
