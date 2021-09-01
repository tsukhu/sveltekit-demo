<script lang="ts">
	import type { FormButtonProps } from './InputType';
	import { ButtonType } from './InputType';

	export let props: FormButtonProps;
</script>

<button
	type={props.type}
	on:click={props.clickHandler}
	class={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 
        text-white 
       ${
					props.type === ButtonType.submit
						? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
						: props.type === ButtonType.reset
						? 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
						: 'bg-gray-700 hover:bg-gray-800 focus:ring-gray-600'
				}`}
>
	{props.label}
</button>
