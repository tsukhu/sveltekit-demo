<script lang="ts">
	import { count } from '../stores/counterStore';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';
</script>

<h1 class="font-extrabold text-4xl text-base-content">Simple Counter</h1>
<div class="flex flex-col w-full gap-4">
	<div class="flex justify-between items-center">
		<div class="text-xl">The count is</div>
		<div class="text-6xl">{$count}</div>
	</div>
	<div class="flex justify-between mt-2 gap-2">
		<Incrementer />
		<Decrementer />
		<Resetter />
	</div>
</div>
