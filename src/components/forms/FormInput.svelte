<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { InputProps, RadioProps, CheckProps, TextAreaProps, SelectProps } from './InputType';

	export let component: typeof SvelteComponent;
	export let props: InputProps | RadioProps | CheckProps | TextAreaProps | SelectProps;
</script>

<svelte:component this={component} {...props} on:inputChange/>
